import React from 'react'
import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #fcfcfc;
    width: 100vw;
    display: flex;
    flex-direction: column;
    
     
`

export const Header = styled.header`
    background-color: #F9B24E;
    width: 100vw;
    height: 10vh;
    top: 0; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h1{
        color: #ffffff;
        margin-left: 64px;
    }

    nav{
        color: #ffffff;
        margin-right: 64px;
    }

`

export const TripContainer = styled.div`
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
    
`

export const CardTrip = styled.section`
    background-color: #ffffff;
    border: 1px solid #e2e2e2;
    width: 322px;
    height: 271px;
    border-radius: 5px;
    margin: 32px auto;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
   
`


