import { ChevronRight } from 'lucide-react';

function SeeMoreButton ({clicked, setClicked}) {

    return (
        <button
            onClick={() => setClicked(prev => !prev)}
            className={`
                absolute transform
                p-2 hover:scale-110 transition-all duration-300 z-10
                text-indigo-200 hover:text-indigo-400 cursor-pointer
                bounce-x -right-30
                ${clicked ? 'hidden' : ''} 

                lg:top-1/2 lg:-translate-y-1/2 lg:right-[-10vw]
                top-auto right-1/3 -translate-x-1/2 bottom-4 translate-y-[15vw]
            `}
        >
            <div className="flex">
                <span className="text-sm font-medium">See more</span>
                <ChevronRight className="animate-pulse" />
            </div>
        </button>
    )
}

export default SeeMoreButton;