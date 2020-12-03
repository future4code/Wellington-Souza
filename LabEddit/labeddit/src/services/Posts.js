import {BASE_URL} from "../constants/ApiUrl"
import {useRequestData} from '../hooks/UseRequestData/UseRequestData'
import axios from 'axios'


const [posts, setPosts] = useState([])

export const getPosts = () => {
    axios.get(`${BASE_URL}/labEddit/posts`,{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }).then((response)=>{
        setPosts(response.data.posts)
    }).catch((error)=>{
        console.log(error.message)
    })

}
