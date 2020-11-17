import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../Componentes/Header/Header'
import Card from '../../Componentes/TripCard/Card'
import { ContainerTrip, ImgContainer, SubleTitle, TripCard, ButtonApplyTrip, CardContainer } from './TripListStyle'



function TripPage () {

    const history = useHistory()

    const goToAplicationTrip = () =>{
        history.push("/aplication-form")
    }

    const goToDetailsTrip = () =>{
        history.push("/trip/details")
    }

    const goToCreateTrip = () =>{
        history.push("/trip/create")
    }

    return(
        <ContainerTrip>
            <Header />
            <hr/>
            <CardContainer>
              <Card goToForm={goToAplicationTrip} />   
              <Card /> 
              <Card /> 
              <Card /> 
            </CardContainer>        
            
            {/* <button onClick={goToAplicationTrip}>Aplicar Viagens</button>
            <button onClick={goToDetailsTrip}>Detalhes da Viagem</button>
            <button onClick={goToCreateTrip}>Criar Viagens</button> */}
        </ContainerTrip>   
        
    )
}

export default TripPage