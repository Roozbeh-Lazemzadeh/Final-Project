import { useState, useEffect } from "react";
import "../module/header.css";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(() => window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);
  return scrollY;
}
