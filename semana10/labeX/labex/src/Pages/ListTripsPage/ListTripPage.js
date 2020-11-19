import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Header from '../../Componentes/Header/Header'
import Card from '../../Componentes/TripCard/Card'
import { ContainerTrip, ImgContainer, SubleTitle, TripCard, ButtonApplyTrip, CardContainer } from './TripListStyle'



function TripPage () {

    const [allTrip, setAllTrip] = useState([])
    
    const pathParams = useParams()
    const id = pathParams.id
    const history = useHistory()

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
    
    

    const goToAplicationTrip = (tripId) =>{
        history.push(`/aplication-form/${tripId}`)
    }

    return(
        <ContainerTrip>
            <Header />
            <hr/>
            <CardContainer>
              {allTrip.map((trip)=>{
                  return(
                    <Card 
                        goToForm={()=>goToAplicationTrip(trip.id)}
                        name={trip.name}
                        duration={trip.durationInDays}
                        key={trip.id}
                        date={trip.date}
                    />   
                  )
              })}
              
            </CardContainer>        
            
        </ContainerTrip>   
        
    )
}

export default TripPage