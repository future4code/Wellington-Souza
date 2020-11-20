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
    background-color: #000000;
`

export const TripCreate = styled.button`
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    border: none;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    
    

    :hover{
        background-color: #444444;
        color: #ffffff;
    }
`