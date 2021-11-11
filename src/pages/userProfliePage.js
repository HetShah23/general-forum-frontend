import React from 'react'
import MultiplePosts from '../components/multiple-posts/multiple-posts'
import ProfileImg from '../assets/profile-img.jpg'
import Navbar from '../components/navbar/navbar'

export const UserProfilePage = () => {
    return(
        <>
            <Navbar></Navbar>
            <div className='container-fluid multiple-posts'>
                <div className="d-flex justify-content-evenly">
                    <div className="p-2 bd-highlight">

                    </div>
                    <MultiplePosts type='profile-page'></MultiplePosts>
                    <div className="p-2 bd-highlight">
                        <div className="create d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <img src={ProfileImg} alt='profle-img' className='user-profile-img'></img>
                                    </div>
                                    <div className="p-2 bd-highlight align-self-center">@username</div>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-column bd-highlight mb-3">
                                    <div className="p-2 bd-highlight user-stats">
                                        <span>12</span> Posts
                                    </div>
                                    <div className="p-2 bd-highlight user-stats">
                                        <span>2</span> Communities Joined
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight other-user-data">
                                <p>Their Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfilePage