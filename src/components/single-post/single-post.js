/* eslint-disable no-unused-vars */
import React from 'react'
import './single-post.css'
import Post1 from '../../assets/post1.jpg'
import Post3 from '../../assets/post3.webp'
import {data, comments} from '../../assets/data.json'


export const SinglePost = () => {
    return(
        <div className='container-fluid multiple-posts'>
            <div className="d-flex justify-content-evenly">
                <div className="p-2 bd-highlight"></div>
                <div className="p-2 bd-highlight">
                    <div className="single-post d-flex flex-column bd-highlight mb-3">
                        <div className="p-2 bd-highlight post-header">
                            <span className='community-name'>{data[7].community}</span> Posted By <span className='user-name'>{data[7].username}</span> <span className='timestamp'>{data[7].timestamp}</span>
                        </div>
                        <div className="p-2 bd-highlight post-title">
                            <h4>{data[7].title}</h4>
                        </div>
                        <div className="p-2 bd-highlight">
                            <img src={data[7].img} alt='post-img' className='post-img'></img>
                        </div>
                        <div className="p-2 bd-highlight text-area">
                            <p>{data[7].caption}</p>
                        </div>
                        <div className="p-2 bd-highlight post-footer">
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="bd-highlight post-interactions"><i className="far fa-heart"></i> Like</div>
                                <div className="bd-highlight post-interactions"><i className="far fa-comment-alt"></i> Comments</div>
                            </div>
                        </div>
                        <hr className="dropdown-divider"></hr>
                        <div className="p-2 bd-highlight comments">
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <form className='comment-form d-flex flex-row bd-highlight justify-content-between'>
                                        <div className="p-2 bd-highlight">
                                            <input type="text" id="comment" name="comment" placeholder='Add Comments'></input>
                                        </div>
                                        <div className="p-2 bd-highlight"><i className="fas fa-location-arrow"></i></div>
                                    </form>
                                </div>
                                <div className="p-2 bd-highlight">
                                    {
                                        comments.map(comnt => (
                                            <div className="d-flex flex-column bd-highlight mb-3 cmnt">
                                                <div className="p-2 bd-highlight">@{comnt.username}</div>
                                                <div className="p-2 bd-highlight"><p>{comnt.comment}</p></div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bd-highlight"></div>
            </div>
        </div>
    )
}

export default SinglePost