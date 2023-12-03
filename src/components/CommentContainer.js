import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

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
  const {name, comment} = data;
  const mode = useSelector(store=>store.app.isDarkMode)
  return(
    <div className={`border border-slate-400 p-2 rounded-md my-2`}>
      <div className='flex items-center mb-2'>
      <FaUserCircle size={24} color='grey' />
        <h1 className='text-lg ml-2 font-medium'>{name}</h1>
        </div>
        <p>{comment}</p>
    </div>
  )
}


const CommentList = ({comments})=>{
  return comments.map((comment, index) => (
  <div>
  <Comment key={index} data={comment} />
  <div className='px-3'>
  <CommentList comments={comment.replies} />
  </div>
  </div> 
  ))};

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className="text-2xl font-semibold mb-2">Comments:</h1>
        <CommentList comments={CommentsData} />
    </div>
  )
}

export default CommentContainer