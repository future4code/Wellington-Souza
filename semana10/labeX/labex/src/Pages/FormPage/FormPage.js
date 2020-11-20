import React, { useState } from 'react'
import axios from "axios"
import { ContainerForm, DivFormAplly , LogoLabeX, FormTitle,ParagraphForm, FormApply, FormAge, FormCountry, FormContainer, ButtonGoTrip, GoBack } from './FormStyle'
import { useHistory, useParams } from 'react-router-dom'



function FormPage () {

   const [name, setName] = useState("") 
   const [age, setAge] = useState("") 
   const [country, setCountry] = useState(null) 
   const [profession, setProfession] = useState("") 
   const [applicationText, setApllicationText] = useState("") 
   const history = useHistory()

   const pathParams = useParams()
   const id = pathParams.id

   const goToHome = () => {
    history.push("/")
}
         
   const handleName = (event) => {
       setName(event.target.value)
   }
   
   const handleAge = (event) => {
    setAge(event.target.value)
   }

   const handleCountry = (event) => {
    setCountry(event.target.value)
   }

   const handleProfession = (event) => {
    setProfession(event.target.value)
   }

   const handleText = (event) => {
    setApllicationText(event.target.value)
   }

   const goApplyToTrip = (event) => {

        
        event.preventDefault()
        

        const body = {
            name: name,
            age: age,
            country: country,
            profession: profession,
            applicationText: applicationText
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington-dumont/trips/${id}/apply`, body

        ).then(()=>{
            console.log("Funcionou")
            setName("")
            setAge("")
            setCountry("Selecione um País")
            setProfession("")
            setApllicationText("")

        }).catch((error)=>{
            console.log(error)
        })
   }



    return(
        <ContainerForm>
            <LogoLabeX>LabeX</LogoLabeX>
            <DivFormAplly>
                <FormTitle>Aplicar vaga para viagem.</FormTitle>
                <ParagraphForm>Insira seus dados para aplicar uma vaga.</ParagraphForm>
                <FormContainer onSubmit={goApplyToTrip} >
                    <FormApply 
                        placeholder="Digite o seu nome"
                        type="text"
                        value={name}
                        onChange={handleName}
                        pattern="[A-Z a-z]{3,}"
                        required
                    />
                    <FormAge 
                        placeholder="Sua Idade" 
                        type="Number" 
                        value={age}
                        onChange={handleAge}
                        min="18"
                        required                        
                    />
                    <FormCountry 
                      value={country}
                      onChange={handleCountry}
                      required  
                    >
                        <option>Selecione um Páis</option>
                        <option >Argentina</option>
                        <option>Colombia</option>
                        <option>Canadá</option>
                        <option>Brasil</option>
                        <option>Estados Unidos</option>
                        <option>Inglaterra</option>
                        <option>Mexico</option>
                        <option>Japão</option>
                        <option>China</option>
                        <option>Venezuela</option>
                        <option>Chile</option>
                        <option>Portugak</option>
                        <option>Espanha</option>
                    </FormCountry>
                    <FormApply 
                        placeholder="Profissão"
                        type="text"
                        value={profession}
                        onChange={handleProfession}
                        pattern="[A-Z a-z]{8,}"
                        required                    
                    />
                    <FormApply 
                        placeholder="Por que você se considera um bom candidato?" 
                        type="text"
                        value={applicationText}
                        onChange={handleText}
                        pattern="[A-Z a-z]{30,}"
                        required
                    />
                   <ButtonGoTrip>Enviar</ButtonGoTrip>
                   <GoBack onClick={goToHome}>Voltar</GoBack>
                </FormContainer>
            </DivFormAplly>
        </ContainerForm>
    )
}

export default FormPage