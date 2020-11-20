import React from 'react'
import styled from 'styled-components'


export const MainContainer = styled.div`
    border: 1px solid #dbd9d9;
    width: 400px;
    height: 650px;
    border-radius: 10px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Imagem = styled.div`
    margin: auto;
    

    img{
        width: 150px;
        height: 50px;
    }
    
`

export const ImgMatch = styled.div` 
    margin-right: 16px;
    cursor: pointer;
    

    img{
        width: 24px;
        height: 24px;
        
    }
    
`

export const Divisor = styled.hr`
    width: 400px;
    opacity: 20%;
    
`

export const CardImagem = styled.div`
     width: 350px;
     height: 380px;
     
 `
 export const ImagemProfile = styled.img`
        width: 350px;
        height: 380px;
        border-radius: 8px;
 `

export const Icones = styled.div`
    width: 300px;
    margin-top: 130px;
    display: flex;
    justify-content: space-evenly;
    

    img{
        width: 50px;
        height: 50px;
        cursor: pointer;
        
    }
`