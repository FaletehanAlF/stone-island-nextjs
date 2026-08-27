"use client";

import { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const h = document.documentElement;
    h.classList.remove("light");
    h.classList.add("dark");
    h.style.background = "#000000";
    h.style.color = "#ffffff";
    setMounted(true);
  }, []);

  const t = translations.en;

  return (
    <AppContext.Provider value={{ t, mounted }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
