import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ViewPageButton({ page, text, goBack }) {
  const arrow = (
    <ChevronRight
      size={16}
      className={`transition-transform duration-200 group-hover:translate-x-0.5 ${
        goBack ? "rotate-180 group-hover:-translate-x-0.5" : ""
      }`}
    />
  );

  return (
    <Link to={`/${page}`}>
      <button className="group relative overflow-hidden px-4 py-2 rounded-xl text-sm text-neutral-300 font-medium cursor-pointer border border-white/10 bg-white/[0.03] hover:border-white/20 hover:text-white hover:bg-white/[0.06] transition-all duration-300">
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
