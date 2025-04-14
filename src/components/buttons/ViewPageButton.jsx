import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ViewPageButton( {page, text, goBack} ) {
  const arrow = <ChevronRight className={`animate-pulse ${goBack ? "rotate-180" : ""}`} />

  return (
    <Link to={`/${page}`}>
        <button className="relative overflow-hidden px-5 py-2 rounded-2xl text-white font-semibold shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 group">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 opacity-70 group-hover:opacity-100 animate-gradient-x" />
            <div className="relative z-10 flex items-center gap-2">
                {goBack ? <>{arrow} {text}</> : <>{text} {arrow}</>} 
            </div>
        </button>
    </Link>    
  );
}
