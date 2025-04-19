import { ChevronRight } from 'lucide-react';

function SeeLessButton ({clicked, setClicked}) {

    return (
        <button
            onClick={() => setClicked(prev => !prev)}
            className={`
                absolute z-10 p-2 transition-all duration-300 
                text-indigo-200 hover:text-indigo-400 cursor-pointer
                hover:scale-110 bounce-x
                ${clicked ? 'block' : 'hidden'}
                
                lg:top-1/2 lg:-translate-y-1/2 lg:left-[-5vw]
                top-auto left-1/3 -translate-x-1/2 bottom-4 translate-y-[15vw]
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