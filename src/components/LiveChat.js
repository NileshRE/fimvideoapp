import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomChat, generateRandomNames } from '../utils/helper';
import { IoMdSend } from "react-icons/io";

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMsg, setLiveMsg] = useState("");
    const Chat = useSelector((store)=>store.chat.messages)
    const mode = useSelector((store)=>store.app.isDarkMode)
    useEffect(()=>{
        const int = setInterval(()=>{
            dispatch(addMessage({
                Name: generateRandomNames(),
                Msg: generateRandomChat()
            }))
        }, 2000);

        return ()=>clearInterval(int);

    },[])
  return(
    <>
    <div className='w-[25rem] h-[600px] border border-slate-200 px-4 py-2 rounded-md shadow-md flex flex-col-reverse'>
     {Chat.map((c,uuid)=><ChatMsg key={uuid} Name={c.Name} Msg={c.Msg} />)}
     </div>
     <form className='flex items-center w-full' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            Name:"Nilesh",
            Msg:liveMsg
        }))
        setLiveMsg("");
     }}>
        <input type='text' value={liveMsg} onChange={(e)=>{setLiveMsg(e.target.value)}} className={`p-2 border border-slate-300 w-10/12 ${mode ? 'bg-slate-100' : 'bg-slate-800'} rounded-l-md`} />
        <button className={`py-3 px-2 rounded-r-md ${mode ? 'bg-slate-100' : 'bg-slate-800'}`}><IoMdSend size={20} /></button>
     </form>
     </>
  )
}

export default LiveChat