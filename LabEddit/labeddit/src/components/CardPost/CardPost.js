import React from 'react'
import { AllIcons, PostCard, FeedsContainer, IconsComments, IconsVote, Texts } from './StyleCard'
import Dow from '../../assets/down-arrow.svg'
import Up from '../../assets/up-arrow.svg'
import Comments from '../../assets/comments.svg'
import ViewPost from '../../assets/add.svg'
import axios from 'axios'


const CardPost = (props) => {

    

    const votePost = (rate) => {
        const body = {
            direction: rate
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/vote`, body,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log("Funcionou")
            props.update()
            
        }).catch((err)=>{
            console.log(err.message)
        })
    }


    return(
        
            <PostCard>
                <Texts>
                    <h4>{props.userName}</h4>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Texts>
                <AllIcons>
                    <IconsVote>
                        <img src={Dow} onClick={()=>{votePost(1)}}/>
                        <p>{props.votes}</p>
                        <img src={Up} onClick={()=>{votePost(-1)}}/>
                    </IconsVote>
                    <IconsComments>
                        <img
                         src={ViewPost}
                         onClick={props.viewPost}
                         />
                        <img src={Comments}/>
                        <p>{props.comments}</p>
                        
                    </IconsComments>
                </AllIcons>
            </PostCard>
        
    )
}

export default CardPost