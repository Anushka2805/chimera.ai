"use client";

import { useEffect, useRef, useState } from "react";
import panzoom from "panzoom";

// HEATMAP COLOR FUNCTION
function getHeatColor(value: number): string {
  if (value >= 75) return "#ff0000";      // red
  if (value >= 50) return "#ff8800";      // orange
  if (value >= 25) return "#ffee00";      // yellow
  return "#22ff22";                       // green
}

interface Props {
  heatmap?: Record<string, string>;       // direct colors
  values?: Record<string, number>;        // dynamic values (0–100)
}

export default function InteractiveIndia({ heatmap = {}, values = {} }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgMarkup, setSvgMarkup] = useState("");

  // Load SVG
  useEffect(() => {
    fetch("/india.svg")
      .then((res) => res.text())
      .then((text) => setSvgMarkup(text));
  }, []);

  // Inject SVG + enable pan/zoom
  useEffect(() => {
    if (!containerRef.current || !svgMarkup) return;

    containerRef.current.innerHTML = svgMarkup;

    const svg = containerRef.current.querySelector("svg") as SVGSVGElement;
    svgRef.current = svg;

    // White outline
    svg.querySelectorAll("path").forEach((p: any) => {
      p.style.stroke = "#ffffff";
      p.style.strokeWidth = "1.2";
    });

    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.objectFit = "contain";

    // PanZoom
    const pz = panzoom(svg, {
      maxZoom: 6,
      minZoom: 1,
      bounds: true,
      boundsPadding: 0.2,
      smoothScroll: true,
    });

    return () => pz.dispose();
  }, [svgMarkup]);

  // APPLY DYNAMIC HEATMAP (values -> color)
  useEffect(() => {
    if (!svgRef.current) return;

    Object.entries(values).forEach(([stateId, val]) => {
      const el = svgRef.current!.querySelector(`#${stateId}`) as SVGPathElement;
      if (el) {
        el.style.fill = getHeatColor(val);
        el.style.transition = "0.3s ease";
      }
    });
  }, [values, svgMarkup]);

  // APPLY DIRECT COLOR OVERRIDES
  useEffect(() => {
    if (!svgRef.current) return;

    Object.entries(heatmap).forEach(([stateId, color]) => {
      const el = svgRef.current!.querySelector(`#${stateId}`) as SVGPathElement;
      if (el) {
        el.style.fill = color;
        el.style.transition = "0.3s ease";
      }
    });
  }, [heatmap, svgMarkup]);

  // Zoom buttons
  const zoomIn = () => svgRef.current && panzoom(svgRef.current).zoomTo(300, 300, 1.4);
  const zoomOut = () => svgRef.current && panzoom(svgRef.current).zoomTo(300, 300, 0.7);

  return (
    <div className="flex flex-col items-center">
      
      {/* Zoom buttons */}
      <div className="flex gap-3 mb-3">
        <button className="bg-cyan-500 px-3 py-1 rounded" onClick={zoomIn}>+</button>
        <button className="bg-cyan-500 px-3 py-1 rounded" onClick={zoomOut}>-</button>
      </div>

      {/* Map box */}
      <div
        ref={containerRef}
        className="
          w-[650px]
          h-[650px]
          overflow-hidden
          border border-cyan-500/20
          rounded-xl
          relative
        "
      />
    </div>
  );
}
