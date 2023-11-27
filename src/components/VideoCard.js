import React from "react";
import millify from "millify";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const VideoCard = ({ info }) => {
  return (
    <div className="mx-6 my-4 shadow-md rounded-b-md">
        <div className="my-3">
            <img src={info?.snippet?.thumbnails.medium.url} alt="thumbnail" className="rounded-md" />
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
