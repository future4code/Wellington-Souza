import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useProtectedPage } from '../../hooks/UseProtectPage/UseProtectPage'

const FeedsPostPage = () => {

    const [post, setPost] = useState([])
    
    useProtectedPage()

    useEffect(()=>{
        getPost()
    },[])

    const getPost = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div>
            <form>
                <label>Titulo do post:</label>
                <input
                    name="title"
                    type="text"
                    placeholder="Titulo do Post"
                />
                
                <textarea
                    name="text"
                    type="text"
                    place="seu post aqui"
                />
                <button>Postar</button>
            </form>
        </div>
    )
}

export default FeedsPostPage