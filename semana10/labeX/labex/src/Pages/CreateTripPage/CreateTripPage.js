import Axios from 'axios'
import React, { useState } from 'react'
import axios from 'axios'
import {useProtectedPage} from '../../hooks/useProtectdPage'


function CreateTripPage () {

    useProtectedPage();

        const [name, setName] = useState("")
        const [planet, setPlanet] = useState(null)
        const [date, setDate] = useState(null)
        const [durationInDays, setDurationInDays] = useState("")
        const [description, setDescription] = useState("")

        const handleName = (event) => {
            setName(event.target.value)
        }

        const handlePlanet = (event) => {
            setPlanet(event.target.value)
        }

        const handleDate = (event) => {
            setDate(event.target.value)
        }

        const handleDescription = (event) => {
            setDescription(event.target.value)
        }

        const handleDurations = (event) => {
            setDurationInDays(event.target.value)
        }

        const tripCreate = (event) =>{
            event.preventDefault()

            const body = {
                name: name,
                planet: planet,
                date: date,
                description: description,
                durationInDays: durationInDays
            }

            axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington-dumont/trips', body,{
                headers:{
                    auth:localStorage.getItem("token")
                }
            }).then(()=>{
                console.log("Cadastrado com sucesso!!")
            }).catch((error)=>{
                console.log(error)
            })
        }

    return(
        <div>
            <form onSubmit={tripCreate}>
                <input 
                    placeholder="Nome"
                    type="text"
                    value={name}
                    onChange={handleName}                    
                    />
                    
                <select value={planet} onChange={handlePlanet}  >
                    <option>Selecione um Planeta</option>
                    <option>Mercúrio</option>
                    <option>Venus</option>
                    <option>Marte</option>
                    <option>Plutão</option>
                    <option>Saturno</option>
                    <option>Júpter</option>
                    <option>Netuno</option>
                    <option>Urano</option>
                    <option>Lua</option>
                </select>
                <input 
                    placeholder="Data"
                    type="date"
                    value={date}
                    onChange={handleDate}  
                />
                <input 
                    placeholder="Descrição"
                    type="text"
                    value={description}
                    onChange={handleDescription}
                />
                <input 
                    placeholder="Duração"
                    type="text"
                    value={durationInDays}
                    onChange={handleDurations}  
                />
                <button>Criar</button>
            </form>
        </div>
    )
   
}

export default CreateTripPage