"use client";

import InteractiveIndia from "./components/InteractiveIndia";
import RightPanel from "./components/RightPanel";
import LeftPanel from "./components/LeftPanel";

export default function HomePage() {
  const values = {
    dl: 82,
    mh: 65,
    up: 40,
    ka: 15,
    gj: 90,
    tn: 55,
    rj: 30,
    wb: 70,
    br: 90,
    or: 45,
    kl: 95,
    as: 78,
  ap: 60,
    pb: 35,
  };

  return (
    <div className="grid grid-cols-[300px_1fr_300px] h-screen gap-4 p-6 bg-black">
      {/* Left Panel */}
      <LeftPanel />

      {/* Center Map */}
      <div className="flex justify-center items-center">
        <InteractiveIndia values={values} />
      </div>

      {/* Right Panel */}
      <RightPanel />
    </div>
  );
}
