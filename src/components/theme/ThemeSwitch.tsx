"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="flex items-center gap-2 text-xl select-none">
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <span>{isDark ? "☀️" : "🌙"}</span>
    </div>
  );
}
