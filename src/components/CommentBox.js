import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { saveComment, fetchComments } from 'actions'

export default function CommentBox({history}) {
    const auth = useSelector(state => state.auth)
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
      if(!auth) {
          console.log('i need to leave');
          history.push('/')
      }
    }, [auth])
 
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(saveComment(comment))

        setComment('')
    }

   const handleFetchComments = () => {
     dispatch(fetchComments())
   }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h4>Add a Comment</h4>
                <textarea 
                    onChange={e => setComment(e.target.value)}
                    value={comment} 
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className='fetch-comments' onClick={handleFetchComments} >Fetch Comments</button>
        </div>
    )
}
