import { useState } from "react"
import { useContentStore } from "../store/content"
import Navbar from "../components/NavBar"

export default function SearchPage() {
    const [activeTab, setActiveTab] = useState("movie")
    const [searchTerm, setSearchTerm] = useState()
    const [results, setResults] = useState([])

    const {setContentType} = useContentStore()

    const handleTabClick = (tab) =>{
        setActiveTab(tab)
        tab === "movie" ? setContentType("movie") : setContentType("tv")
        setResults([])
    }

  return (
    <div className="bg-black min-h-screen text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center gap-3 mb-4">
                <button className={`py-2 px-4 rounded ${activeTab === "movie" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
                    onClick={()=>handleTabClick("movie")}>
                    Movies
                </button>
                <button className={`py-2 px-4 rounded ${activeTab === "tv" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
                    onClick={()=>handleTabClick("tv")}>
                    Tv Shows 
                </button>
                <button className={`py-2 px-4 rounded ${activeTab === "person" ? "bg-red-600" : "bg-gray-800"} hover:bg-red-700`}
                    onClick={()=>handleTabClick("person")}>
                    Person
                </button>
            </div>
            <form className="flex gap-2 items-stretch mb-8 max-w-2xl mx-auto">
                <input type="text"
                  value={searchTerm} 
                  onChange={(e)=>setSearchTerm(e.target.value)}
                  placeholder={`Search for a ${activeTab}`}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                 />
            </form>
        </div>
    </div>
  )
}
