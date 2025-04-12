import { ChevronRight } from 'lucide-react';

function SeeLessButton ({clicked, setClicked}) {

    return (
        <button
            onClick={() => setClicked(prev => !prev)}
            className={`
                absolute top-1/2 transform -translate-y-1/2 
                p-2 hover:scale-110 transition-all duration-300 z-10
                text-indigo-200 hover:text-indigo-400 cursor-pointer
                bounce-x -left-[8vw]
                ${clicked ? 'absolute' : 'hidden'} 
            `}
        >
            <div className="flex">
                <ChevronRight className="animate-pulse rotate-180" />
                <span className="text-sm font-medium">See less</span>
            </div>
        </button>
    )
}

export default SeeLessButton;