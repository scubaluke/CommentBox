import React from 'react'
import { useSelector } from 'react-redux'

export default function CommentList() {
    const comments = useSelector(state => state.comments)
    const renderedComments = comments.map(comment => <li key={comment} >{comment}</li>)
    
    return (
        <>
            <h4>Comment List</h4>
            <ul>
                {renderedComments}
            </ul>
        </>
    )
}
