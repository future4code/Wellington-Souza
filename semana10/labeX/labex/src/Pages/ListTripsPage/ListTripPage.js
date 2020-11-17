import React from 'react'
import { useHistory } from 'react-router-dom'



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
        <div>
            <button onClick={goToAplicationTrip}>Aplicar Viagens</button>
            <button onClick={goToDetailsTrip}>Detalhes da Viagem</button>
            <button onClick={goToCreateTrip}>Criar Viagens</button>
        </div>
    )
}

export default TripPage