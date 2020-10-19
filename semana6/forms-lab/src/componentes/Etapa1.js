import React from 'react';
import styled from 'styled-components'
import {PerguntaAberta} from './perguntas/PerguntaAberta'


const InfoGerais = styled.div `
    margin: 0 auto;
`


export class DadosGerais extends React.Component{
    render(){
        return(
            <InfoGerais>
                
                    <h1>ETAPA 1 - DADOS GERAIS </h1>
                    <PerguntaAberta pergunta={"1. Qual é o seu nome?"}/>
                    <input></input>
                    <PerguntaAberta pergunta={"2. Qual sua idade?"}/>
                    <input></input>
                    <PerguntaAberta pergunta={"1. Qual é o seu email"}/>
                    <input></input>
                    <PerguntaAberta pergunta={"1. Qual a sua escolaridade?"}/>
                    <select>
                        <option>Ensino médico incompleto</option>
                        <option>Ensino médico completo</option>
                        <option>Ensino superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                
               
            </InfoGerais>
        )
    }
} 