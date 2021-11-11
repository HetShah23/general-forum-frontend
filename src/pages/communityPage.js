import React from 'react'
import {communityData} from '../assets/data.json'
import Navbar from '../components/navbar/navbar'

export const CommunityPage = (props) => {
    
    return(
        <>
            <Navbar></Navbar>
            <div className='container-fluid multiple-posts'>
                <div className="d-flex justify-content-evenly">
                    <div className="p-2 bd-highlight"></div>
                    <div className="p-2 bd-highlight">
                        {
                            communityData.posts.map(post => (
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
                    <div className="p-2 bd-highlight">
                        <div className="create d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <img src={communityData.profileImg} alt='profle-img' className='user-profile-img'></img>
                                    </div>
                                    <div className="p-2 bd-highlight align-self-center cummunity-name">{communityData.name} <br></br> <span>{communityData.catagoty}</span></div>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-column bd-highlight mb-3">
                                    <div className="p-2 bd-highlight user-stats">
                                        <span>{communityData.posts.length}</span> Posts
                                    </div>
                                    <div className="p-2 bd-highlight user-stats">
                                        <span>{communityData.members}</span> Members
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight other-user-data">
                                <p>{communityData.desc}</p>
                            </div>
                            <div className="p-2 bd-highlight other-user-data">
                                <button className='create-post'>Join Community</button>
                            </div>
                            <div className="p-2 bd-highlight other-user-data">
                                <button className='create-community'>Create Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityPage