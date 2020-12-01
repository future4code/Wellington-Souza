import axios from 'axios'
import react, { useEffect, useState } from 'react'
import  {useProtectedPage } from '../../hooks/UseProtectPage/UseProtectPage'
import {useParams} from 'react-router-dom'

const PostPage = () => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [form, setForm] = useState({text:""})
    const pathParams = useParams()
    const id = pathParams.id

    useProtectedPage()

    useEffect(()=>{
        postDetails()
    },[])

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const postDetails = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`,{
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

    const createComments = (event) => {

        event.preventDefault()

        const body = {
            text: form.text
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`, body,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(()=>{
            alert("Comentário Cadastrado!!")
            postDetails()
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    

    return(
        <div>
            <div>
                <p>{post.username}</p>
                <p>{post.title}</p>
                <p>{post.text}</p>
                <p>{post.votesCount}</p>
                <p>{post.commentsCount}</p>
                <div>
                    <form onSubmit={createComments}>
                        <textarea
                            name="text"
                            type="text"
                            value={form.text}
                            onChange={handleInputChange}
                        />
                        <button>Comentar</button>
                    </form>
                </div>

                <div>
                    {comments && (
                        comments.map((item)=>{
                            return(
                                <div key={item.id}>
                                    <p>{item.text}</p>
                                    <p>{item.username}</p>
                                </div>
                            )
                        })
                    )}
                </div>
                

            </div>
        </div>
    )
}

export default PostPage