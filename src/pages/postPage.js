import React from 'react'
import Navbar from '../components/navbar/navbar'
import SinglePost from '../components/single-post/single-post'

export const PostPage = () => {
    return(
        <>
            <Navbar></Navbar>
            <SinglePost></SinglePost>
        </>
    )
}

export default PostPage