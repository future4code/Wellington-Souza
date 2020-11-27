import React from 'react'
import styled from 'styled-components'

export const ContainerForm = styled.div`
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

export const DivFormAplly = styled.div`
    width:400px;
    height: 500px;
    border-radius: 10px;
    background-color: #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly

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
export const ParagraphForm = styled.p`
    text-align: center;
`
export const FormContainer = styled.form`
    width: 380px;
    justify-content: center;
    margin-top: 20px;
`

export const FormApply = styled.input`
    border: 1px solid #d8d8d8;
    width: 350px;
    height: 35px;
    border-radius: 5px;
    margin-bottom: 8px;
    padding: 5px;
    margin-left: 10px;
`


export const FormAge = styled.input`
    width: 150px;
    height: 35px;
    border-radius: 5px;
    margin-bottom: 8px;
    padding: 5px;
    border: 1px solid #d8d8d8;
    margin-left: 10px;

`

export const FormCountry = styled.select`
    width: 150px;
    height: 48px;
    border-radius: 5px;
    margin-bottom: 8px;
    padding: 5px;
    border: 1px solid #d8d8d8;
    margin-left: 50px;
    
`

export const ButtonGoTrip = styled.button`
    width: 272px;
    height: 60px;
    border: none;
    background-color: #f4b129;
    color: #000000;
    border-radius: 10px;
    margin-top: 32px;
    font-size: 24px;
    margin-left: 50px;
    cursor: pointer;

    :hover{
        background-color: #000000;
        color: #ffffff;
    }

`

export const GoBack = styled.p`
    width: 272px;
    height: 60px;
    color: #000000;
    border: none;
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    margin-left: 50px;

`