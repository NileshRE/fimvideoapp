import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useFilterAPI, useVideosAPI } from './VideoContext';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const {setVideosList} = useVideosAPI();
  const {filterList} = useFilterAPI();
  const getVideos=async()=>{
    const url = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`);
    const response = await url.json();
    setVideos(response?.items);
    setVideosList(response?.items);
  }

  useEffect(()=>{
    getVideos();
  },[])

  return (
    <div className="flex flex-wrap mx-[30px] gap-3">
      {filterList.length > 0 ? 
  filterList.map(video => (
    <div key={video.id} className="w-fit">
      <Link to={"/watch/?v=" + video.id}>
        <VideoCard info={video} />
      </Link>
    </div>
  )) : 
  videos.map(video => (
    <div key={video.id} className="w-fit">
      <Link to={"/watch/?v=" + video.id}>
        <VideoCard info={video} />
      </Link>
    </div>
  ))
}

    </div>
  )
}

export default VideoContainer