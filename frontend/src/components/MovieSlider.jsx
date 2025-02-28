import { useEffect, useRef, useState } from "react";
import { useContentStore } from "../store/content"
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MovieSlider({category}) {
    const { contentType } = useContentStore()
    const [content, setContent] = useState([])
    const [showArrows, setShowArrows] = useState(false)
    const slideRef = useRef()

    const formattedContent = contentType === 'movie' ? "Movies" : "Tv Shows";
    const formattedCategoryName =  category.replaceAll('_', " ")[0].toUpperCase() + 
                                   category.replaceAll('_', " ").slice(1)

    useEffect(()=>{
        const getContent = async () =>{
            const res = await axios.get(`/api/v1/${contentType}/${category}`)
            setContent(res.data.content)
        }
        getContent()
    },[contentType, category])

    const scrollLeft = () => {
        if(slideRef.current){
            slideRef.current.scrollBy({left:-slideRef.current.offsetWidth, behavior : 'smooth'})
        }
    }

    const scrollRight = () => {
        if(slideRef.current){
            slideRef.current.scrollBy({left:slideRef.current.offsetWidth, behavior : 'smooth'})
        }
    }

    return (
    <div className="text-white bg-black relative px-5 md:px-20" 
        onMouseEnter={()=>setShowArrows(true)}
        onMouseLeave={()=>setShowArrows(false)}
    >
        <h2 className="mb-4 text-2xl font-bold">
            {formattedCategoryName} {formattedContent}
        </h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide" ref={slideRef}>
            {content.map((item)=>{
                return <Link to={`/watch/${item.id}`} className="min-w-[250px] relative group" key={item.id}>
                    <div className="rounded-lg overflow-hidden">
                        <img src={SMALL_IMG_BASE_URL+item.backdrop_path} alt="Movie Image" 
                         className="transition-transform duration-300 ease-in-out group-hover:scale-125"
                        />
                    </div>
                    <p className="mt-2 text-center">{item.title || item.name}</p>
                </Link>
            })}
        </div>

        { showArrows && <>
            
            <button className="absolute top-1/2 -translate-y-1/2 left-5 md:left-20 flex items-center 
                justify-center size-12 rounded-full bg-black bg-opacity-30 hover:bg-opacity-75
                text-white z-10">
                <ChevronLeft size={24} onClick={scrollLeft} />
            </button>
            <button className="absolute top-1/2 -translate-y-1/2 right md:right-20 flex items-center 
                justify-center size-12 rounded-full bg-black bg-opacity-30 hover:bg-opacity-75
                text-white z-10">
                <ChevronRight size={24} onClick={scrollRight} />
            </button>  

        </> }

    </div>
    )
}
