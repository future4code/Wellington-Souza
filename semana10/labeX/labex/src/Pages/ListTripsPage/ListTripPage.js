import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../Componentes/Header/Header'
import Card from '../../Componentes/TripCard/Card'
import { ContainerTrip, ImgContainer, SubleTitle, TripCard, ButtonApplyTrip, CardContainer } from './TripListStyle'



function TripPage () {

    const [allTrip, setAllTrip] = useState([])

    useEffect(() => {
        getAllTrip()
    }, [])

    const getAllTrip = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington-dumont/trips')
        .then((res)=>{
            setAllTrip(res.data.trips)
        }).catch((err)=>{
            console.log(err)
        })
    }  
    
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
              {allTrip.map((trip)=>{
                  return(
                    <Card 
                        goToForm={goToAplicationTrip}
                        name={trip.name}
                        duration={trip.durationInDays}
                        key={trip.id}
                        date={trip.date}
                    />   
                  )
              })}
              
            </CardContainer>        
            
            {/* <button onClick={goToAplicationTrip}>Aplicar Viagens</button>
            <button onClick={goToDetailsTrip}>Detalhes da Viagem</button>
            <button onClick={goToCreateTrip}>Criar Viagens</button> */}
        </ContainerTrip>   
        
    )
}

export default TripPage