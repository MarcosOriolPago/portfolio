"use client";

import { useState } from "react";
import ProjectCard, { type CardVariant } from "../ProjectCard";
import { RevealOnScroll } from "../RevealOnScroll";
import { projects, themes, type Theme } from "../../data/projects";

/** Bento placement for the featured projects, in the order they appear in data/projects.tsx. */
const featuredLayout: { variant: CardVariant; className: string }[] = [
  { variant: "wide", className: "md:col-span-2 lg:col-span-2" },
  { variant: "tall", className: "lg:col-start-3 lg:row-start-1 lg:row-span-2" },
  { variant: "feature", className: "lg:col-start-1 lg:row-start-2" },
  { variant: "feature", className: "lg:col-start-2 lg:row-start-2" },
];

type Filter = "All" | Theme;

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");

  const featured = projects.filter((p) => p.featured).slice(0, featuredLayout.length);
  const rest = projects.filter((p) => !featured.includes(p));
  const filtered = projects.filter((p) => p.theme === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Projects</h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-10">
            A selection of projects I have built, ranging from research tools to web applications.
          </p>
        </RevealOnScroll>

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by theme">
          {(["All", ...themes] as Filter[]).map((t) => {
            const active = filter === t;
            const count = t === "All" ? projects.length : projects.filter((p) => p.theme === t).length;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(t)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-colors cursor-pointer ${
                  active
                    ? "bg-neutral-900 border-neutral-900 text-white"
                    : "bg-white/70 border-black/10 text-neutral-700 hover:border-black/25"
                }`}
              >
                {t}
                <span className={`text-xs ${active ? "text-white/60" : "text-neutral-400"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {filter === "All" ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((p, i) => (
                <ProjectCard key={p.slug} {...p} {...featuredLayout[i]} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {rest.map((p) => (
                <ProjectCard key={p.slug} {...p} variant="compact" />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} {...p} variant="compact" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
