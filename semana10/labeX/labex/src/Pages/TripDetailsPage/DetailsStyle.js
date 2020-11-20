import React from 'react'
import styled from "styled-components"

export const MainContainer = styled.div`
    background-color: #000000;
    height: 100vh;
    
    
`

export const ContainerCards = styled.div`
    display: flex;
    padding: 50px;
    justify-content: center;
`

export const CardDetailsTrip = styled.section`
    border: 1px solid #d8d8d8;
    background-color: #e8e8e8;
    width: 400px;
    height: 500px;
    border-radius: 5px;
    margin-top: 80px;
    padding: 16px;
    
`

export const CardCandidate = styled.section`
    border: 1px solid #d8d8d8;
    background-color: #e8e8e8;
    width: 400px;
    height: 500px;
    border-radius: 5px;
    margin-top: 80px;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    padding: 16px;
`

export const Candidates = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d8d8d8;
    height: 30px;
    padding: 8px;
    margin-top: 16px;
    border-radius: 5px;

`

export const Aproved = styled.button`
        width: 100px;
        height: 30px;
        border-radius: 5px;
        border: none;
        background-color: #06a357 ;
        color: #ffffff;
        margin-left: 24px;
`

export const Denied = styled.button`
        width: 100px;
        height: 30px;
        border-radius: 5px;
        border: none;
        background-color: #e2440b ;
        color: #ffffff;
`
