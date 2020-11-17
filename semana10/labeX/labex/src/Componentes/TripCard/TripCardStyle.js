import React from "react"
import styled from "styled-components"

export const TripCard = styled.section`
    width: 322px;
    height: 300px;
    border: 1px solid #444444;
    margin-left: 64px;
    margin-top: 80px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
`

export const ImgContainer = styled.div`
    width: 302px;
    height: 200px;
    
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
    width: 322px;
    height: 60px;
    border-radius: 10px;
    cursor: pointer;

    :hover{
        background-color: #444444;
        color: #ffffff;
    }
`