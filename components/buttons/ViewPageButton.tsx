"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface ViewPageButtonProps {
  page: string;
  text: string;
  goBack?: boolean;
}

export default function ViewPageButton({
  page,
  text,
  goBack,
}: ViewPageButtonProps) {
  const arrow = (
    <ChevronRight
      size={16}
      className={`transition-transform duration-200 group-hover:translate-x-0.5 ${
        goBack ? "rotate-180 group-hover:-translate-x-0.5" : ""
      }`}
    />
  );

  return (
    <Link href={`/${page}`}>
      <button className="group relative overflow-hidden px-4 py-2 rounded-xl text-sm text-neutral-700 font-medium cursor-pointer border border-black/10 bg-black/[0.03] hover:border-black/20 hover:text-neutral-900 hover:bg-black/[0.06] transition-all duration-300">
        <div className="relative z-10 flex items-center gap-1.5">
          {goBack ? (
            <>
              {arrow} {text}
            </>
          ) : (
            <>
              {text} {arrow}
            </>
          )}
        </div>
      </button>
    </Link>
  );
}
