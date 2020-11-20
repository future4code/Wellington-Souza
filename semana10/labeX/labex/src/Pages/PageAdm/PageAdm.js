import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../Componentes/Header/Header'
import CardAdm from '../../Componentes/TripCard/CardAdm'
import { useProtectedPage } from '../../hooks/useProtectdPage'
import { ContainerTrip, CardContainer, TripCreate } from './PageAdmStyle'



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
         .then(()=>{
               history.push(`/trip/details/${id}`)
         }).catch((error)=>{
             console.log(error)
         })
     }
      

    const goToCreateTrip = () =>{
        history.push("/trip/create")
    }

    return(
        <div>
            <Header />
            <ContainerTrip>
                <TripCreate onClick={goToCreateTrip}>Criar Viagens</TripCreate>
                <CardContainer>
                    
                {allTrip.map((trip)=>{
                    return(
                        <CardAdm 
                            
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
            
        </div>   
        
    )
}

export default PageAdm