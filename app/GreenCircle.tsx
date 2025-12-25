"use client";

import React from "react";

export const GreenCircle: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <div
    className="rounded-full bg-green-500 flex items-center justify-center"
    style={{ width: size, height: size }}
    aria-label="Green circle"
    role="img"
  />
);

export default GreenCircle;
