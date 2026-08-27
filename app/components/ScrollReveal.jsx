"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp",
  stagger = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!visible) {
      switch (animation) {
        case "fadeRight":
          return "translateX(-30px)";
        case "fadeLeft":
          return "translateX(30px)";
        case "scale":
          return "scale(0.95)";
        default:
          return "translateY(40px)";
      }
    }
    return "none";
  };

  const style = {
    opacity: visible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  };

  if (stagger) {
    return (
      <div ref={ref} className={className} style={style}>
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(25px)",
                  transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.12}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.12}s`,
                }}
              >
                {child}
              </div>
            ))
          : children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
