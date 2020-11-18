import React from 'react'
import styled from 'styled-components'

export const ContainerTrip = styled.div`
    height: 100vh;
    background-color: #000000;

    hr{
        color:#ffffff;
        opacity: 5%;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #161616;
`

export const TripCreate = styled.button`
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    border: none;
    width: 322px;
    height: 60px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    

    :hover{
        background-color: #444444;
        color: #ffffff;
    }
`