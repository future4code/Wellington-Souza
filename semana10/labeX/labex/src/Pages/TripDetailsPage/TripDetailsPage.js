import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardDetailsTrip, ContainerCards, MainContainer, CardCandidate, Candidates, Aproved, Denied } from './DetailsStyle'
import Header from "../../Componentes/Header/Header"
import { useProtectedPage } from '../../hooks/useProtectdPage'


export default function TripDetailsPage () {

    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const pathParams = useParams()
    const id = pathParams.id

    useProtectedPage()
    
    useEffect (()=>{
        getTripDetail()
    },[])

    const getTripDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington-dumont/trip/${id}`,{
           headers:{
               auth: localStorage.getItem("token")
           } 
        })
         .then((response)=>{
             setTrip(response.data.trip)
             setCandidates(response.data.trip.candidates)
        }).catch((error)=>{
             console.log(error)
         })
     
    }

    const approveCandidate = (okay, idCandidate) => {
        
           
        const body = {
            approve: okay,
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington-dumont/trips/${id}/candidates/${idCandidate}/decide`,
            body, {
                headers:{
                    auth: localStorage.getItem("token")
                }
            }).then((response)=>{
                console.log("ACEITO")
                getTripDetail()
            }).catch((error)=>{
                console.log(error.message)
            })
    }

    
    return (
        <MainContainer>
            <Header />
            <ContainerCards>
                <CardDetailsTrip>
                    <h1>{trip.name}</h1>
                    <h4>{trip.durationInDays} dias</h4>
                    <p>{trip.description}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Data: {trip.date}</p>
                </CardDetailsTrip>
                <CardCandidate>
                    <h1>Candidatos</h1>
                    {candidates.map ((candidate)=>{
                        return(
                            <Candidates>
                                <p>{candidate.name}</p>
                                <Aproved onClick={()=>approveCandidate(true, candidate.id)}>Aprovar</Aproved>
                                { <Denied onClick={()=>approveCandidate(false, candidate.id)} >Reprovar</Denied>}
                            </Candidates>
                    )
                     })}
                 </CardCandidate>
                
            </ContainerCards>
            </MainContainer>
    )
}