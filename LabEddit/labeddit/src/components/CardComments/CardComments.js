import React from 'react'
import NewComments from './Comments'
import axios from 'axios'
import { AllIcons, ButtonComments, CommentField, CommentForm, Comments, IconsComments, IconsVote, OnePost, PostsContainer } from './style'
import Dow from '../../assets/down-arrow.svg'
import Up from '../../assets/up-arrow.svg'
import Comts from '../../assets/comments.svg'
import ViewPost from '../../assets/add.svg'
import VoteLike from '../../assets/up-blue.svg'
import Disliked from '../../assets/down-red-arrow.svg'



const CommentsCard = (props) => {

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

    const Like = () => {
        
        if(props.voteDirection === 0){
            return (
                <>
                    <img src={Dow} onClick={()=>{votePost(-1)}}/>
                    <p>{props.votes}</p>
                    <img src={Up} onClick={()=>{votePost(1)}}/>
                </>
            )
        }else if (props.voteDirection === 1 ){
            return (
                <>
                    <img src={Dow} onClick={()=>{votePost(-1)}}/>
                    <p>{props.votes}</p>
                    <img src={VoteLike} onClick={()=>{votePost(0)}}/>
                </>
            )
        }else{
            return (
                <>
                 <img src={Disliked} onClick={()=>{votePost(0)}}/>
                  <p>{props.votes}</p>
                  <img src={Up} onClick={()=>{votePost(1)}}/>
                </>
            )
        }
    }

      return(
        <PostsContainer>
            <OnePost>
                <h4>{props.username}</h4>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </OnePost>
            
            <AllIcons>
                <IconsVote>
                    {Like()}
                </IconsVote>
               <IconsComments>
                    <img src={Comts}/>
                    <p>{props.comments}</p>
                </IconsComments>
            </AllIcons>
            <hr/>
            <CommentForm>
                <CommentField/>
                <ButtonComments>Comentar</ButtonComments>
            </CommentForm>
            {props.newsComments && (
                props.newsComments.map((comm)=>{
                    return(
                        <NewComments
                            key={comm.id}
                            user={comm.username}
                            text={comm.text}
                            id={comm.id}
                            voteDirection={comm.userVoteDirection}
                            votes={comm.votesCount}
                            idPost={props.id}
                            
                        />
                    )
                })
            )}
            
        </PostsContainer>
      )  
}

export default CommentsCard