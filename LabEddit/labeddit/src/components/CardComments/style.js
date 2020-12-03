import styled from 'styled-components'

export const PostsContainer = styled.div`
    width: 700px;
    border: 1px solid;
    background-color: #fff;
    border: 0.5px solid #ededed;
    border-radius: 5px;
    box-shadow: 1px 2px 6px #adabab;
    padding: 24px;
    margin: 0 auto;
    hr{
        border: 0.5 #9a9a9a;
    }
    
`
export const OnePost = styled.div`

        h4{
                font-size: 12px;
            }

            h2{
                font-size: 24px;
            }

            p{
                font-size: 16px;
            }

`
export const AllIcons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
      
    
    
`

export const IconsVote = styled.div`
    display: flex;
    
    img{
        width: 16px;
        margin-left: 8px;
        cursor: pointer;
    }

    p{
        margin-left: 8px;
    }
`

export const IconsComments = styled.div`
    display: flex;
    
    img{
        width: 24px;
        margin-right: 8px;
        margin-left: 8px;
        cursor: pointer;
    }

    p{
        margin-right: 8px;
    }

`
export const CommentForm = styled.form`
    width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
`
export const CommentField = styled.textarea`
    width: 550px;
    height: 80px;
    margin-top: 8px;
    border-radius: 16px;
    padding: 8px;
`
export const ButtonComments = styled.button`
    background-color: #DADFE6;
    border: none;
    width: 560px;
    margin-top: 8px;
    height: 45px;
    color: #ffff;
    font-size: 16px;
    padding: 8px;
    cursor: pointer;
    border-radius: 9px;
    margin-bottom: 8px;
    color: #000000;
`

export const Comments = styled.div`
    width: 650px;
    height: 150px;
    margin: 0 auto;
    margin-top: 8px;
    padding: 16px;

    h4{
                font-size: 12px;
            }


            p{
                font-size: 16px;
            }

`

export const ContainerComment = styled.div`
    width: 700px;
    background-color: #ffff;
    height: 200px;
`