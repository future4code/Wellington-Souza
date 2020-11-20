import React from 'react'
import styled from 'styled-components'

export const ContainerTrip = styled.div`
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;    
    
`


export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const TripCreate = styled.button`
    background-color: #f4b129;
    color: #000000;
    font-size: 16px;
    border: none;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    align-content: center;
    margin-top: 50px;
    
    

    :hover{
        background-color: #444444;
        color: #ffffff;
    }
`