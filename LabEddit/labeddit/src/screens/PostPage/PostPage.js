import React,{useEffect, useState} from 'react'
import  {useProtectedPage } from '../../hooks/UseProtectPage/UseProtectPage'
import CommentsCard from '../../components/CardComments/CardComments'

import { PostPageContainer } from './PostPageStyles'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../../constants/ApiUrl'
import {  ContainerComment, PostsContainer } from '../../components/CardComments/style'
import Comments from '../../components/CardComments/Comments'



const PostPage = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const pathParams = useParams()
    const id = pathParams.id

    useProtectedPage()

    useEffect(()=>{
        postDetails()
    },[])

    const postDetails = () => {
        axios.get(`${BASE_URL}/labEddit/posts/${id}`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res)=>{
            setPost(res.data.post)
            setComments(res.data.post.comments)
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    return(
        
            <>
                <CommentsCard
                    username={post.username}
                    text={post.text}
                    title={post.title}
                    id={post.id}
                    comments={post.commentsCount}
                    votes={post.votesCount}
                    newsComments={comments}
                    voteDirection={post.userVoteDirection}
                    update={postDetails}
                />
            </>
        
                  
    )
}

export default PostPage