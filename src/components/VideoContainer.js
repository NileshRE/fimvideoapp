import React, { useEffect, useState } from 'react'
import { GOOGLE_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos=async()=>{
    const url = await fetch(GOOGLE_API);
    const response = await url.json();
    setVideos(response?.items);
  }

  useEffect(()=>{
    getVideos();
  },[])

  return (
    <div className="flex flex-wrap">
      {videos?.map(video=>(
        <div key={video.id} className="w-3/12">
      <Link to={"/watch/?v=" + video.id}>
        <VideoCard info={video} />
      </Link>
      </div>
      ))}
    </div>
  )
}

export default VideoContainer