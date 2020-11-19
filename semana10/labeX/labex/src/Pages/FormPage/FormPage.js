import React, { useState } from 'react'
import axios from "axios"
import { ContainerForm, DivFormAplly , LogoLabeX, FormTitle,ParagraphForm, FormApply, FormAge, FormCountry, FormContainer, ButtonGoTrip } from './FormStyle'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'


function FormPage () {

   const {form, onChange} = useForm({name:"", age:"", country:"", profission:"", applicationText:"" }) 

   const pathParams = useParams()
   const id = pathParams.id
         
   
   const handleInput = (event) => {
       const {value, name} = event.target
        onChange(value, name)
   }
   

   const goApplyToTrip = (event) => {

        event.preventDefault()

        const body = {
            name: form.name,
            age: form.age,
            country: form.country,
            profission: form.profission,
            applicationText: form.applicationText
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington-dumont/trips/${id}/apply`, body

        ).then(()=>{
            console.log("Funcionou")

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
                        value={form.name}
                        onChange={handleInput}
                        required
                    />
                    <FormAge 
                        placeholder="Sua Idade" 
                        type="Number" 
                        value={form.age}
                        onChange={handleInput}
                        required                        
                    />
                    <FormCountry 
                      value={form.country}
                      onChange={handleInput}
                      required  
                    >
                        <option>Selecione um Páis</option>
                        <option value={"Argentina"}>Argentina</option>
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
                        value={form.name}
                        onChange={handleInput}
                        required                    
                    />
                    <FormApply 
                        placeholder="Por que você se considera um bom candidato?" 
                        type="text"
                        value={form.applicationText}
                        onChange={handleInput}
                        required
                    />
                   <ButtonGoTrip>Enviar</ButtonGoTrip>
                </FormContainer>
            </DivFormAplly>
        </ContainerForm>
    )
}

export default FormPage