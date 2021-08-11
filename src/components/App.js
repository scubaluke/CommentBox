import React from 'react'
import { useSelector } from 'react-redux'

import { Route, Link } from 'react-router-dom'
import CommentList from 'components/CommentList'
import CommentBox from 'components/CommentBox'

export default function App() {
    const auth = useSelector(state => state.auth)
    console.log(auth);

    const renderButton = () => {
        if(auth) {
            return(
                <button>Sign Out</button>
            )
        } else {
            return (
                <button>Sign In</button>
            )
        }
    }
    const renderHeader = () => {
        return (
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/post' >Post a Comment</Link>
                </li>
                <li>
                  {renderButton()}
                </li>
            </ul>
        )
    }
    return (
        <div>
            {renderHeader()}
            <Route path="/post" component={CommentBox} />
            <Route path="/" component={CommentList} exact />         
       </div>
    )
}
