import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../utils/commentSlice';

const CommentsData = [
  {
    name:"Nilesh",
    comment: "Lorem ipsum sit amet dolor",
    replies:[{
      name:"Nilesh",
      comment: "Lorem ipsum sit amet dolor",
      replies:[]
    },
    {
      name:"Nilesh",
      comment: "Lorem ipsum sit amet dolor",
      replies:[
        {
          name:"Nilesh",
          comment: "Lorem ipsum sit amet dolor",
          replies:[
            {
              name:"Nilesh",
              comment: "Lorem ipsum sit amet dolor",
              replies:[{
                name:"Nilesh",
                comment: "Lorem ipsum sit amet dolor",
                replies:[{
                  name:"Nilesh",
                  comment: "Lorem ipsum sit amet dolor",
                  replies:[]
                }]
              }]
            },
          ]
        }
      ]
    },
    ]
  },
  {
    name:"Nilesh",
    comment: "Lorem ipsum sit amet dolor",
    replies:[]
  },
  {
    name:"Nilesh",
    comment: "Lorem ipsum sit amet dolor",
    replies:[]
  }
]

const Comment = ({data}) =>{
  const {name, comment} = data
  return(
    <div className={`border border-slate-200 p-2 rounded-md my-2`}>
      <div className='flex items-center mb-2'>
      <FaUserCircle size={24} color='grey' />
        <h1 className='text-lg ml-2 font-medium'>{name}</h1>
        </div>
        <p>{comment}</p>
    </div>
  )
}


const CommentList = ({comments})=>{
  return comments.map((comment, uuid) => (
  <div key={uuid}>
  <Comment data={comment} />
  <div className='px-3'>
  <CommentList comments={comment.replies} />
  </div>
  </div> 
  ))};

const CommentContainer = () => {
  const mode = useSelector((store)=>store.app.isDarkMode)
  const [liveComment, setLiveComment] = useState("");
  const c = useSelector((store)=>store.comment.comments)
  const dispatch = useDispatch();
  return (
    <div className='m-5 p-2'>
        <h1 className="text-2xl font-semibold mb-2">Comments:</h1>
        <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addComment({
            name:"Nilesh",
            comment:liveComment
          }))
          setLiveComment("");
        }}>
        <input type='text' value={liveComment} onChange={(e)=>{setLiveComment(e.target.value)}} className={`p-3 w-8/12 border border-slate-200 ${mode ? 'bg-slate-200' : 'bg-slate-800'} rounded-md`} />
        <button className={`py-3 px-2 rounded-r-md ${mode ? 'bg-slate-100' : 'bg-slate-800'}`}>Comment</button>
        </form>
        {c.map((cmnt, uuid)=><Comment key={uuid} data={cmnt} />)}
        <CommentList comments={CommentsData} />
    </div>
  )
}

export default CommentContainer