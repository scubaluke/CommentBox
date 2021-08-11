import React from 'react'
import { Route } from 'react-router-dom'
import CommentList from 'components/CommentList'
import CommentBox from 'components/CommentBox'

export default function App() {
    return (
        <div>
            <Route path="/post" component={CommentBox} />
            <Route path="/" component={CommentList} exact />         
       </div>
    )
}
