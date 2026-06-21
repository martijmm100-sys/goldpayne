import { useEffect, useState } from "react";
import AppShell from "./components/AppShell";

export type PageId =
  | "dashboard"
  | "beginner"
  | "field-manual"
  | "course"
  | "map"
  | "travel"
  | "gear"
  | "legal"
  | "trip"
  | "hiking"
  | "glossary";

export interface NavItem {
  id: PageId;
  label: string;
  /** Short blurb used on the dashboard cards. */
  blurb: string;
  icon: string; // simple unicode glyph for the dashboard tile
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: "beginner",
    label: "Beginner Guide",
    blurb: "Brand new to gold panning? Start right here with the simple basics.",
    icon: "🥾",
  },
  {
    id: "field-manual",
    label: "Field Manual",
    blurb: "Quick at-the-creek reference: how to read water and work a pan.",
    icon: "📖",
  },
  {
    id: "course",
    label: "Learning Course",
    blurb: "Five short lessons that take you from zero to your first trip.",
    icon: "🎓",
  },
  {
    id: "map",
    label: "Interactive Map",
    blurb: "Every location pinned and color-coded by whether panning is allowed.",
    icon: "🗺️",
  },
  {
    id: "travel",
    label: "Map-first Travel Guide",
    blurb: "Suggested day trips and routes, easiest and safest first.",
    icon: "🧭",
  },
  {
    id: "gear",
    label: "Gear Guide",
    blurb: "Exactly what to bring — and what to leave at home.",
    icon: "🪣",
  },
  {
    id: "legal",
    label: "Legal & Safety Guide",
    blurb: "Where panning is allowed, where it isn't, and how to stay safe.",
    icon: "⚖️",
  },
  {
    id: "trip",
    label: "Trip Planner",
    blurb: "A printable checklist and a simple plan for the day.",
    icon: "✅",
  },
  {
    id: "hiking",
    label: "Hiking Basics",
    blurb: "Outdoor safety basics for getting to and from the creek.",
    icon: "🌲",
  },
  {
    id: "glossary",
    label: "Glossary",
    blurb: "Plain-language meanings for every term used in this app.",
    icon: "🔤",
  },
];

export default function App() {
  const [page, setPage] = useState<PageId>("dashboard");

  // Keep the URL hash in sync so links/refresh land on the same page.
  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "") as PageId;
    const valid = ["dashboard", ...NAV_ITEMS.map((n) => n.id)] as string[];
    if (fromHash && valid.includes(fromHash)) setPage(fromHash as PageId);
  }, []);

  useEffect(() => {
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page]);

  return <AppShell page={page} setPage={setPage} />;
}
