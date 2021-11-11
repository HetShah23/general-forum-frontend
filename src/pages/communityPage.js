import React, {useEffect} from 'react'
import MultiplePosts from '../components/multiple-posts/multiple-posts'
import ProfileImg from '../assets/profile-img.jpg'
import {data} from '../assets/data.json'
import Navbar from '../components/navbar/navbar'

export const CommunityPage = (props) => {
    
    let filteredArray = []

    useEffect(() => {
        data.forEach(post => {
            if(post.community === 'Football'){
                filteredArray.push(post)
            }    
        })
    }, [])

    console.log(filteredArray)

    return(
        <>
            <Navbar></Navbar>
            <div className='container-fluid multiple-posts'>
                <div className="d-flex justify-content-evenly">
                    <div className="p-2 bd-highlight">

                    </div>
                    <MultiplePosts type='community' post={filteredArray} ></MultiplePosts>
                    <div className="p-2 bd-highlight">
                        <div className="create d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        <img src={ProfileImg} alt='profle-img' className='user-profile-img'></img>
                                    </div>
                                    <div className="p-2 bd-highlight align-self-center cummunity-name">Cummunity Name <br></br> <span>educational</span></div>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-column bd-highlight mb-3">
                                    <div className="p-2 bd-highlight user-stats">
                                        <span>12</span> Posts
                                    </div>
                                    <div className="p-2 bd-highlight user-stats">
                                        <span>6</span> Members
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight other-user-data">
                                <p>Their Description</p>
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