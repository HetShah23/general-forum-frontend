/* eslint-disable no-unused-vars */
import React from 'react'
import './multiple-posts.css'
import Post1 from '../../assets/post1.jpg'
import Post3 from '../../assets/post3.webp'
import {data} from '../../assets/data.json'

export const MultiplePosts = (props) => {
    
    return(
        <div className="p-2 bd-highlight">
            {
                data.map(post => (
                    <div className="posts d-flex flex-column bd-highlight mb-3" key={post.id}>
                        <div className="p-2 bd-highlight post-header">
                            <span className='community-name'><a href='/community'>{post.community}</a></span> Posted By <span className='user-profile'><a href='/user-profile'>@{post.username}</a></span> <span className='timestamp'>{post.timestamp}</span>
                        </div>
                        <div className={(post.title===""? "invisible":"p-2 bd-highlight post-title")}>
                            <h4>{post.title}</h4>
                        </div>
                        <div className={(post.img===""? "invisible":"p-2 bd-highlight img-area")}>
                            <img src={(post.img==="post5.jpg"? "http://localhost:5000/public/2021-11-11T04-44-57.636Zpost5.jpg":post.img)} alt='post-img' className='post-img'></img>  
                        </div>
                        <div className={(post.caption===""? "invisible":"p-2 bd-highlight")}>
                            <p>{post.caption}</p>
                        </div>
                        <div className="p-2 bd-highlight post-footer">
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="bd-highlight post-interactions"><i className="far fa-heart"></i> Like</div>
                                <a href='post'><div className="bd-highlight post-interactions"><i className="far fa-comment-alt"></i> Comments</div></a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MultiplePosts