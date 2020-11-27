import React from "react"
import styled from "styled-components"

export const TripCard = styled.section`
    width: 250px;
    height: 190px;
    border: 1px solid #444444;
    margin-left: 64px;
    margin-top: 80px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    justify-content: center;
    align-items: center;

    p{
        color: #ffffff;
        margin-top: -5px;
    }
`


export const SubleTitle = styled.h3 `
    font-size: 16px;
    color: #ffffff;
`

export const ButtonApplyTrip = styled.button`
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    border: none;
    width: 200px;
    height: 45px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    

    :hover{
        background-color: #f4b129;
        color: #000000;
    }
`
