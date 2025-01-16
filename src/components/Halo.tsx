"use client";

import { useEffect, useState } from "react";

export default function Halo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth > 1024) {
        setPosition({ x: event.clientX, y: event.clientY + window.scrollY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 lg:absolute halo-background"
      style={
        {
          "--x": `${position.x}px`,
          "--y": `${position.y}px`,
        } as React.CSSProperties
      }
    ></div>
  );
}
