/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState} from 'react'
import MultiplePosts from '../components/multiple-posts/multiple-posts'
import Navbar from '../components/navbar/navbar'
import { useForm } from "react-hook-form"
import {data} from '../assets/data.json'


export const HomePage = () => {

    // eslint-disable-next-line no-unused-vars
    const [postImg, setPostImg] = useState("")
    const [imgData, setImgData] = useState("")
    const [offenceError, setOffenceError] = useState(false)
    const [userPosts, setUserPosts] = useState(data)

    const { register, handleSubmit } = useForm()
    const onSubmit = postData => {
        const newData = {
            id : data.length+1,
            title : postData.title,
            caption : postData.caption,
            username : "anaypatel0416",
            img : postData.img[0].name,
            community : postData.community,
            timestamp : "just now"
        }
        if(newData.img === 'post1.jpeg'){
            setOffenceError(true)
        } else{
            const newUserData = data.unshift(newData)
            setUserPosts(newUserData)
        }
    }

    
    const onChangePicture = e => {
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files)
          setPostImg(e.target.files[0])
          const reader = new FileReader()
          reader.addEventListener("load", () => {
            setImgData(reader.result)
          })
          reader.readAsDataURL(e.target.files[0])
        }
    }

    return(
        <>
            <Navbar></Navbar>
            <div className='container-fluid multiple-posts'>
                <div className="d-flex justify-content-evenly">
                    <div className="p-2 bd-highlight">

                    </div>
                    <MultiplePosts data={userPosts} type="home"></MultiplePosts>
                    <div className="p-2 bd-highlight">
                        <div className="create d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">Let's brag about something new!</div>
                            <div className="p-2 bd-highlight">
                                <button className='create-post' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create New Post</button>
                                
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tableindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Create New Post</h5>
                                                <a type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
                                            </div>
                                            <div className="modal-body">
                                                <form className='create-post-form' onSubmit={handleSubmit(onSubmit)}>
                                                    <input {...register("title")} type='text' id="title" name="title" placeholder='Post title'></input>
                                                    <input {...register("caption")} type='text' id="caption" name="caption" placeholder='Post Caption'></input>
                                                    <select {...register("community")} className="form-dropdown" aria-label="Default select example">
                                                        <option default>Select Community</option>
                                                        <option value="Anime">Anime</option>
                                                        <option value="Technology">Technology</option>
                                                        <option value="Football">Football</option>
                                                        <option value="">none</option>
                                                    </select>
                                                    <input {...register("img")} onChange={ onChangePicture } id="fileItem" type="file"></input>
                                                    <div className={(imgData===""? "invisible":"previewProfilePic")}>
                                                      <img className="playerProfilePic_home_tile" alt='post-img' src={imgData} />
                                                    </div>
                                                    <small>{offenceError? "Offence detected in the image, post stopped.":""}</small>
                                                    <div className="modal-footer">
                                                        <button type="submit" className="create-post" >Create</button>
                                                    </div>
                                                </form>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <button className='create-community'>Create New Community</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage