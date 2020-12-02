import React from 'react'
import { ButtonComments, FormField, PubContainer, TextForm, TitleField } from './FormPostStyle'

const PostForm = () => {


    
    return(
       <PubContainer>
           <FormField>
               <TitleField/>
               <TextForm/>
               <ButtonComments>Publicar</ButtonComments>
           </FormField>
       </PubContainer> 
    )
}

export default PostForm