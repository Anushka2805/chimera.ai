import React from "react";

export default function DelhiMap({ colors = {}, onDistrictClick = () => {} }) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >

      {/* --- Central Delhi --- */}
      <path
        id="central-delhi"
        d="M531 362L570 380L600 420L580 450L540 440L520 400Z"
        fill={colors["central-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("Central Delhi")}
      />

      {/* --- New Delhi --- */}
      <path
        id="new-delhi"
        d="M500 410L540 440L520 480L480 470L460 430Z"
        fill={colors["new-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("New Delhi")}
      />

      {/* --- North Delhi --- */}
      <path
        id="north-delhi"
        d="M520 300L580 330L600 360L570 380L531 362L500 330Z"
        fill={colors["north-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("North Delhi")}
      />

      {/* --- South Delhi --- */}
      <path
        id="south-delhi"
        d="M470 500L520 480L560 520L530 560L490 550Z"
        fill={colors["south-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("South Delhi")}
      />

      {/* --- East Delhi --- */}
      <path
        id="east-delhi"
        d="M600 420L660 430L690 470L670 510L620 500L580 450Z"
        fill={colors["east-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("East Delhi")}
      />

      {/* --- West Delhi --- */}
      <path
        id="west-delhi"
        d="M430 400L460 430L480 470L450 520L400 500L390 450Z"
        fill={colors["west-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("West Delhi")}
      />

      {/* --- North West Delhi --- */}
      <path
        id="north-west-delhi"
        d="M420 320L500 330L531 362L500 390L430 380L400 350Z"
        fill={colors["north-west-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("North West Delhi")}
      />

      {/* --- North East Delhi --- */}
      <path
        id="north-east-delhi"
        d="M600 360L650 370L690 430L660 430L600 420Z"
        fill={colors["north-east-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("North East Delhi")}
      />

      {/* --- South West Delhi --- */}
      <path
        id="south-west-delhi"
        d="M390 450L400 500L360 540L320 510L330 460Z"
        fill={colors["south-west-delhi"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("South West Delhi")}
      />

      {/* --- Shahdara --- */}
      <path
        id="shahdara"
        d="M670 430L720 450L740 490L690 470Z"
        fill={colors["shahdara"] || "#d1d5db"}
        stroke="#000"
        onClick={() => onDistrictClick("Shahdara")}
      />

    </svg>
  );
}
