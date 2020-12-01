import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/UseProtectPage/UseProtectPage'

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
            console.log(response.data)
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

    const votePost = (id) => {
        const body = {
            direction: 1
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log("Funcionou")
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    const noVotePost = (id) => {
        const body = {
            direction: -1
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log("Funcionou")
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    return(
        <div>
            <form onSubmit={createPost}>
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
            </form>
            <div>
                {posts.map((post)=>{
                    return(
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <h4>{post.username}</h4>
                            <p>{post.text}</p>
                            <p>{post.commentsCount}</p>
                            <p>{post.votesCount}</p>
                            <button onClick={()=>detailPost(post.id)}>Abrir Post</button>
                            <button onClick={()=>votePost(post.id)}>Like</button>
                            <button onClick={()=>noVotePost(post.id)}>Disliked</button>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeedsPostPage