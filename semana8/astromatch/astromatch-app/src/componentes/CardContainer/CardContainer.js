import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Logo from '../../assets/astromatch-logo.png'
import Icone1 from '../../assets/user-verification.svg'
import {MainContainer} from './styled'
import {Header} from './styled'
import {Imagem} from './styled'
import {ImgMatch} from './styled'
import {Divisor} from './styled'
import {CardImagem, Icones, ImagemProfile} from './styled'
import Like from '../../assets/heart.svg'
import Dislike from '../../assets/dislike.svg'



export default function CardContainer (props){

    const [perfil, setPerfil] = useState({})



    useEffect (()=>{
        pegaPerfil()
    },[])

    const pegaPerfil = () =>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/person")
            .then((resposta)=>{
                setPerfil(resposta.data.profile)
                }).catch((error)=>{
                console.log(error.message)
            })
    }

    const gosteiFoto = (gostei) => {
        const body = {
            id: perfil.id,
            choice: gostei,
        };

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/choose-person', body)
            .then((resposta)=>{
                pegaPerfil()
            }).catch((error)=>{
                console.log(error.message)
            })
    }


        
    return(
        <MainContainer>
            <Header>
               <Imagem > 
                   <img src={Logo} alt="Astro Match" />
               </Imagem>
               <ImgMatch>
                   <img 
                       src={Icone1} 
                       alt="Verificação Match"
                       onClick={props.abreList}
                       
                       />
               </ImgMatch>
       </Header>
       <Divisor />
       <CardImagem>
           <ImagemProfile src={perfil.photo}/>
           <h3>{perfil.name},{perfil.age}</h3>
           <p>{perfil.bio}</p>             
       </CardImagem>
           
       <Icones>
           <img src={Dislike} alt="Dislike" onClick={()=>{gosteiFoto(false)}}/>
           <img src={Like} alt="Like" onClick={()=>{gosteiFoto(true)}}/>
           
        </Icones>
     </MainContainer> 
    )
}