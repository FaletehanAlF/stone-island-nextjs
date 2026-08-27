"use client";

export default function ThemeWrapper({ children, className = "" }) {
  return (
    <div className={className} style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {children}
    </div>
  );
}
