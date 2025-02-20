"use client";

import { useState } from "react";
import { ViewToggle } from "./providers/ViewToggle";
import SearchIdeas from "./SearchIdeas";
import { ideas } from "@/data";
import { IdeaCard } from "./IdeaCard";

export default function HomePageClientWrapper() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <>
      <div className='flex items-center justify-between mb-8'>
        <SearchIdeas />
        <ViewToggle view={view} onChange={setView} />
      </div>

      <div
        className={`grid gap-6 ${
          view === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {ideas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} view={view} />
        ))}
      </div>
    </>
  );
}
