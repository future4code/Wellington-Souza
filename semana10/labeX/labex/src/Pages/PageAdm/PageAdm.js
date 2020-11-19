import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../Componentes/Header/Header'
import CardAdm from '../../Componentes/TripCard/CardAdm'
import { useProtectedPage } from '../../hooks/useProtectdPage'
import { ContainerTrip, CardContainer } from './PageAdmStyle'



function PageAdm () {

    const [allTrip, setAllTrip] = useState([])
   
    const history = useHistory()

    
       

    useProtectedPage();

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
    
    const getTripDetails = (id) =>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington-dumont/trip/${id}`,{
           headers:{
               auth: localStorage.getItem("token")
           } 
        })
         .then((response)=>{
             console.log(response.data.trip)
             history.push(`/trip/details/${id}`)
         }).catch((error)=>{
             console.log(error)
         })
     }

    
    const goToAplicationTrip = () =>{
        history.push("/aplication-form/")
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
                    <CardAdm 
                        goToForm={goToAplicationTrip}
                        name={trip.name}
                        duration={trip.durationInDays}
                        key={trip.id}
                        date={trip.date}
                        goToDetails={()=>getTripDetails(trip.id)}

                    />   
                  )
              })}
              
            </CardContainer>        
            
        </ContainerTrip>   
        
    )
}

export default PageAdm