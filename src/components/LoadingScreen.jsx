import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText ] = useState("");
    const fullText = "<Welcome ! />";

    useEffect (() => {
            let index = 0;
            const interval = setInterval(() => {
                setText(fullText.substring(0, index));
                index++;

                if (index > fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onComplete()
                    }, 500);
                }
            }, 100);

            return () => clearInterval(interval);
        }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4 sm:px-8 text-center">
            <div className="mb-4 text-2xl sm:text-4xl font-mono font-bold leading-tight">         
                {text} <span className="animate-blink ml-1"> | </span>
            </div>
        </div>
    )
}