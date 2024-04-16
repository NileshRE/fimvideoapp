import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/navSlice';
import {useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
  <div className='m-auto'>
    <div className='lg:flex lg:flex-row md:flex md:flex-col'>
      <div className='videowrapper'>
        <iframe width="1024" height="800" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </div>
    <div className='max[640px]:w-full'>
      <p className='font-semibold text-lg mb-2'>Live Chat</p>
       <LiveChat />
      </div>
    </div>
    <CommentContainer />
    </div>
  )
}

export default WatchPage