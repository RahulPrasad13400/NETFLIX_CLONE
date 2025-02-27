// Global state to select between Tv or Movie 

import { create } from "zustand";

export const useContentStore = create((set)=>({
    contentType : "movie",
    setContentType : (type) => set({ contentType : type})
}))