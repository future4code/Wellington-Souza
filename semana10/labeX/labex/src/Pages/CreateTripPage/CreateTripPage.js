import Axios from 'axios'
import React, { useState } from 'react'
import axios from 'axios'
import {useProtectedPage} from '../../hooks/useProtectdPage'
import {FormContainer, ContainerForm, FormCreate, DivFormCreate, Planet, FormTitle, ButtonCreate, LogoLabeX} from '../CreateTripPage/CreateStyle'
import { GoBack } from '../FormPage/FormStyle'
import { useHistory } from 'react-router-dom'


function CreateTripPage () {

    useProtectedPage();

        const [name, setName] = useState("")
        const [planet, setPlanet] = useState(null)
        const [date, setDate] = useState(null)
        const [durationInDays, setDurationInDays] = useState("")
        const [description, setDescription] = useState("")
        const history = useHistory()

        const goToHome = () => {
            history.push("/")
        }

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
        <ContainerForm>
            
            <DivFormCreate>
            
                <FormTitle>Cadastrar viagens</FormTitle>
                <FormContainer onSubmit={tripCreate}>
                    <FormCreate 
                        placeholder="Nome"
                        type="text"
                        value={name}
                        onChange={handleName} 
                        pattern="[A-Z a-z]{3,}"
                        required                   
                        />
                        
                    <Planet value={planet} onChange={handlePlanet}  >
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
                    </Planet>
                    <FormCreate 
                        placeholder="Data"
                        type="date"
                        value={date}
                        onChange={handleDate} 
                        min="2021-01-01"
                        required 
                    />
                    <FormCreate 
                        placeholder="Descrição"
                        type="text"
                        value={description}
                        onChange={handleDescription}
                        pattern="[A-Z a-z]{30,}"
                    />
                    <FormCreate 
                        placeholder="Duração"
                        type="number"
                        value={durationInDays}
                        onChange={handleDurations} 
                        min="50" 
                        required
                    />
                    <ButtonCreate>Criar</ButtonCreate>
                    <GoBack onClick={goToHome}>Voltar</GoBack>
                </FormContainer>
            </DivFormCreate>
        </ContainerForm>
    )
   
}

export default CreateTripPage