import { createContext, useContext, useState } from "react";

const VideoContext = createContext()

export const VideoContextProvider=({children})=>{
    const [videosList, setVideosList] = useState([]);
    return(
        <VideoContext.Provider value={{videosList, setVideosList}}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideosAPI =()=>{
    return useContext(VideoContext);
}

const VideoFilter = createContext()

export const VideoFilterProvider=({children})=>{
    const [filterList, setFilterList] = useState([]);
    return(
        <VideoFilter.Provider value={{filterList, setFilterList}}>
            {children}
        </VideoFilter.Provider>
    )
}

export const useFilterAPI =()=>{
    return useContext(VideoFilter);
}