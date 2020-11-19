import React from 'react'
import styled from 'styled-components'

export const ContainerLogin = styled.div`
    background-color: #000000;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LogoLabeX = styled.h1`
    color: #ffffff;
`

export const ContainerFormLogin = styled.div`
    width:400px;
    height: 350px;
    border-radius: 10px;
    background-color: #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: center;

    hr{
        border: 1px solid #d8d8d8;
        width: 390px;
        opacity: 55%;
    }
`
export const FormTitle = styled.h3`
    font-size: 16px;
    text-align: center;

`
export const ParagraphLogin = styled.p`
    text-align: center;
`

export const FormLogin = styled.input`
    border: 1px solid #d8d8d8;
    width: 350px;
    height: 35px;
    border-radius: 5px;
    margin-bottom: 8px;
    padding: 5px;
`

export const ButtonAdm = styled.button`
    width: 272px;
    height: 60px;
    border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
    border-radius: 10px;
    margin-top: 32px;
    font-size: 24px;
    cursor: pointer;

    :hover{
        background-color: #efefef;
        color: #444444;
    }
`