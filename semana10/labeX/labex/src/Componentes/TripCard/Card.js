import React from "react"
import {TripCard, ImgContainer, SubleTitle, ButtonApplyTrip} from "./TripCardStyle"

export default function Card (props) {
    return(
     <TripCard>
        <SubleTitle>{props.name}</SubleTitle>
        <p>Dias: {props.duration}</p>
        <p>Data: {props.date}</p>
        
        <ButtonApplyTrip onClick={props.goToForm}>Quero Viajar</ButtonApplyTrip>
    </TripCard>
    )
}

