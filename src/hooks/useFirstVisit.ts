"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "hq-portfolio-visited";

export default function useFirstVisit(): boolean {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem(STORAGE_KEY);
    if (!visited) {
      setIsFirstVisit(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  }, []);

  return isFirstVisit;
}
