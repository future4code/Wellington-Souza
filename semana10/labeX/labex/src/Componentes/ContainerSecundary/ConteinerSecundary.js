import React from 'react'
import {useHistory} from "react-router-dom"
import { ButtonLogin, ButtonTrip, ContainerSecundary, Paragraph, TittleInitial } from './style'


function PrincipalContainer () {

    const history = useHistory()

    const goToLogin = () => {
        history.push("/login")
    }

    const goToTripList = () => {
        history.push("/trip/list")
    }

    return(
        <ContainerSecundary>
            <TittleInitial>Prepare-se para a aventura</TittleInitial>
            <Paragraph>Venha conhecer nossas viagens espaciais.</Paragraph>
            <ButtonTrip onClick={goToTripList}>Aplicar viagens</ButtonTrip>
            <ButtonLogin onClick={goToLogin}>Entrar</ButtonLogin>
        </ContainerSecundary>
    )
}

export default PrincipalContainer