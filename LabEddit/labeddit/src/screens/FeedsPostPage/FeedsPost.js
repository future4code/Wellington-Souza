import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/UseProtectPage/UseProtectPage'
import { FeedsContainer } from './FeedsStyles'
import CardPost from "../../components/CardPost/CardPost"
import { render } from '@testing-library/react'
import { PubContainer } from '../../components/Form/FormPostStyle'
import  PostForm  from '../../components/Form/PostForm'

const FeedsPostPage = () => {

    const [posts, setPosts] = useState([])
    const [form, setForm] = useState({text:"", title:""})
    const history = useHistory()
    
    useProtectedPage()

    useEffect(()=>{
        getPost()
    },[])

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    
    const getPost = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then((response)=>{
            setPosts(response.data.posts)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const createPost = (event) => {
        event.preventDefault()

        const body = {
            text: form.text,
            title: form.title
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", body, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(()=>{
            alert("Post cadastrado!")
            getPost()
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    const detailPost = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(()=>{
            history.push(`/post/${id}`)
        }).catch((erro)=>{
            console.log(erro)
        })
            
    } 
    

    return(
        <FeedsContainer>
            <PostForm
                
            
            />
            {/* <form onSubmit={createPost}>
                <label>Titulo do post:</label>
                <input
                    name="title"
                    type="text"
                    placeholder="Titulo do Post"
                    value={form.title}
                    onChange={handleInputChange}
                />
                
                <textarea
                    name="text"
                    type="text"
                    place="seu post aqui"
                    value={form.text}
                    onChange={handleInputChange}
                />
                <button>Postar</button>
            </form> */}
            
            {
                posts && (
                    posts.map((post)=>{
                        return(
                            <CardPost
                              key={post.id}
                              userName={post.username}
                              title={post.title}
                              text={post.text}
                              comments={post.commentsCount}
                              votes={post.votesCount}
                              viewPost={()=>detailPost(post.id)}
                              id={post.id}
                              update={getPost}
                              
                            
                            />     
                        )
                    })
                )
               
            }
            

        </FeedsContainer>
    )
}

export default FeedsPostPage