import react from 'react'
import  {useProtectedPage } from '../../hooks/UseProtectPage/UseProtectPage'

const PostPage = () => {

    useProtectedPage()

    return(
        <div>Página de post</div>
    )
}

export default PostPage