import React, {useState, useEffect} from 'react'
import axios from "axios"

import Logo from '../../assets/astromatch-logo.png'
import Back from "../../assets/back.svg"
import {ListContainer, ListHeader, ImagemLogo, IconeBack, ListaMatch, Delete} from './Styled'
import {Divisor} from '../CardContainer/styled'
import DeleteIcon from '../../assets/delete.svg'

export default function ListaLike (props){

    const [listaCuritda, setListaCurtida] = useState([])

    useEffect (()=>{
        pegaLista()
    },[])

    const pegaLista = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/matches")
            .then((resposta)=>{
                setListaCurtida(resposta.data.matches)
            }).catch((error)=>{
                console.log(error.message)
            })

    }

    const limpaLista = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington/clear")
            .then(()=>{
                console.log("Lista apagada")
                pegaLista()
            }).catch((error)=>{
                console.log(error.message)
            })
    }

    return(
        <ListContainer >
            <ListHeader>
                <IconeBack>
                    <img src={Back} alt="Voltar" />
                </IconeBack>
                <ImagemLogo>
                    <img src={Logo} alt="Astro Match" />
                </ImagemLogo>
            </ListHeader>
            <Divisor/>
            <div>
                {listaCuritda.map((lista)=>{
                    return (
                        <ListaMatch>
                            <img src={lista.photo}/>
                            <p>{lista.name}</p>
                        </ListaMatch>
                    )
                      
                })}
            </div>
            <Delete>
                <img src={DeleteIcon} onClick={limpaLista} />
            </Delete>
        </ListContainer>
    )
}