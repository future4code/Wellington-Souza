import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function TripDetailsPage () {

    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const pathParams = useParams()
    const id = pathParams.id

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
    return (
        <div>
            <p>{trip.name}</p>
            <p>{trip.durationsInDays}</p>
            <p>{trip.description}</p>
            <p>{trip.planet}</p>
            <p>{trip.date}</p>
            <div>
                {candidates.map ((candidate)=>{
                    return(
                        <div>
                            <p>{candidate.name}</p>
                            <p>{candidate.applicationText}</p>
                            <p>{candidate.age}</p>
                            <p>{candidate.profession}</p>
                            <p>{candidate.country}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}