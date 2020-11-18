import React from "react"
import {TripCard, ImgContainer, SubleTitle, ButtonApplyTrip} from "./TripCardStyle"

export default function CardAdm (props) {
    return(
     <TripCard>
        <ImgContainer>
            <img src="https://picsum.photos/seed/picsum/300/200" / >
        </ImgContainer>
        <SubleTitle>{props.name}</SubleTitle>
        <p>Dias: {props.duration}</p>
        <p>Data: {props.date}</p>
        
        <ButtonApplyTrip onClick={props.goToDetails}>Detalhes</ButtonApplyTrip>
    </TripCard>
    )
}

