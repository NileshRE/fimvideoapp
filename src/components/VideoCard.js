import React from "react";
import millify from "millify";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { useSelector } from "react-redux";


TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const VideoCard = ({ info }) => {
  const mode = useSelector(store=>store.app.isDarkMode)
  return (
    <div className={`rounded-b-md shadow-md md:w-[340px] max-[640px]:w-[340px] ${mode && "hover:scale-95"}`}>
        <div className="my-3">
            <img src={info?.snippet?.thumbnails.medium.url} alt="thumbnail" className="rounded-md mx-auto" />
        </div>
        <div className="px-3 pb-2">
        <p className="text-sm font-semibold pb-1">{info?.snippet?.title}</p>
        <p className="text-sm font-light text-gray-500">{info?.snippet?.channelTitle}</p>
        <div className="flex items-center">
        <p className="text-xs text-gray-500 pt-1 mr-2">{millify(info?.statistics?.viewCount)} Views&nbsp; |</p>
        <p className="text-xs pt-1 text-gray-500">{timeAgo.format(Date.now(info?.snippet.publishedAt) - 24 * 60 * 60 * 1000)}</p>
        </div>
        </div>
    </div>
  )
}

export default VideoCard
