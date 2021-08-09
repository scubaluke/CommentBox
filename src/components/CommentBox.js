import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { saveComment } from 'actions'

export default function CommentBox() {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
 
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(saveComment(comment))

        setComment('')
    }
    return (
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
    )
}
