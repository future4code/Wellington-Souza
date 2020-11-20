import React from 'react'
import styled from 'styled-components'


export const ListContainer = styled.div`
    border: 1px solid #dbd9d9;
    width: 400px;
    height: 650px;
    border-radius: 10px;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ListHeader = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    
`
export const ImagemLogo = styled.div`
    margin:  auto;
    
    

    img{
        width: 150px;
        height: 50px;
    }
    
`
export const IconeBack = styled.div` 
    margin-left: 16px;
    cursor: pointer;

    img{
        width: 24px;
        height: 24px;
    }
    
`
export const ListaMatch = styled.div`
    border: 1px solid #fcfcfc;
    background-color: #f7f4f4;
    width: 350px;
    height: 60px;
    box-shadow: 2px 5px 7px #f2efef;
    display: flex;
    align-items: center;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        padding: 8px;
    }
`

export const Delete = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 140px;
    cursor: pointer;

    img {
        width: 50px;
        height: 50px;
        margin: auto;
    }
`
