import React from "react"
import styled from "styled-components"

// DIVI PRINCIPAL :

export const DivPrincipal = styled.div`
    border: 1px solid black;
    width: 600px;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

`
// TELA DE MENSAGEM :

export const TelaDeMensagem = styled.div` 
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    padding: 20px;

`

// TELA E INPUTS :

export const DivInput = styled.div`
    border: 1px solid black;
    height: 20px;
    display: flex;

`

export const InputNome = styled.input`
    width: 150px;
`
export const InputMensagem = styled.input`
    flex-grow: 1;
`