//Hooks
import { useState } from "react";
//Icons
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel_Insta = ({ children: slides }) => {
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent(
        (current) => (current === 0 ? slides.length - 1 : current - 1)
    );
    const next = () => setCurrent(
        (current) => (current === slides.length - 1 ? 0 : current + 1)
    );

  return (
    <section>
       <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)`}}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80  text-gray-800 hover:bg-white">
                    <ChevronLeft size={40}/>
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80  text-gray-800 hover:bg-white">
                    <ChevronRight size={40}/>
                </button>
            </div>
            <div className="absolute left-0 right-0 bottom-4">
                <div className="flex justify-center items-center gap-2">
                    {
                        slides.map((_, i) => (
                            <div className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-4" : "bg-opacity-50"}`}></div>
                        ))
                    }
                </div>
            </div>
       </div>
    </section>
  )
}

export default Carousel_Insta