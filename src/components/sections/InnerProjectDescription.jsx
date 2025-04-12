import React from "react";
import { useRef, useEffect, useState} from "react";

import "../../assets/styles/text.scss";

export default function InnerProjectDescription({ children }) {
    const scrollRef = useRef(null);
    const [showTopShadow, setShowTopShadow] = useState(false);
    const [showBottomShadow, setShowBottomShadow] = useState(true);

    useEffect(() => {
        const el = scrollRef.current;

        const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = el;
        const margin = 5;
        setShowTopShadow(scrollTop > 0);
        setShowBottomShadow((scrollTop + clientHeight + margin) < scrollHeight);
        };

        handleScroll(); // initialize
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="relative h-120 border-3 border-indigo-300 rounded-xl border-dashed shadow-lg p-4">
            {showTopShadow && (
                <div className="pointer-events-none absolute rounded-xl top-0 left-0 right-0 h-6 bg-gradient-to-b from-indigo-200 to-transparent z-10" />
            )}
        
            {/* Bottom Shadow */}
            {showBottomShadow && (
                <div className="pointer-events-none absolute rounded-xl bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-indigo-300 to-transparent z-10" />
            )}
        
            <div className="overflow-y-scroll scrollbar-hide h-full" 
                ref={scrollRef}
            >
                {children}
            </div>
        </div>
    )
}
