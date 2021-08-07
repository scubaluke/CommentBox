import React, { useState } from 'react'

export default function CommentBox() {
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        //todo: call an action creator

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
