import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux' 
// import commentsReducer from 'reducers/comments'
import { saveComment } from 'actions'
import * as actions from 'actions'

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
