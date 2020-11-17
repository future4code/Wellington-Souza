import React from "react"
import {TripCard, ImgContainer, SubleTitle, ButtonApplyTrip} from "./TripCardStyle"

export default function Card (props) {
    return(
     <TripCard>
        <ImgContainer>
            <img src="https://picsum.photos/seed/picsum/300/200" / >
        </ImgContainer>
        <SubleTitle>Ano novo em Mercurio</SubleTitle>
        <ButtonApplyTrip onClick={props.goToForm}>Quero Viajar</ButtonApplyTrip>
    </TripCard>
    )
}

