import React from 'react'
import { ContainerForm, DivFormAplly , LogoLabeX, FormTitle,ParagraphForm, FormApply, FormAge, FormCountry, DivContainerForm, ButtonGoTrip } from './FormStyle'


function FormPage () {
    return(
        <ContainerForm>
            <LogoLabeX>LabeX</LogoLabeX>
            <DivFormAplly>
                <FormTitle>Aplicar vaga para viagem.</FormTitle>
                <ParagraphForm>Insira seus dados para aplicar uma vaga.</ParagraphForm>
                <DivContainerForm>
                    <FormApply placeholder="Digite o seu nome"/>
                    <FormAge placeholder="Sua Idade" type="Number" />
                    <FormCountry>
                        <option>Selecione um Páis</option>
                        <option>Argentina</option>
                        <option>Colombia</option>
                        <option>Canadá</option>
                        <option>Brasil</option>
                        <option>Estados Unidos</option>
                        <option>Inglaterra</option>
                    </FormCountry>
                    <FormApply placeholder="Profissão"/>
                    <FormApply placeholder="Por que deseja ir?" />
                   <ButtonGoTrip>Enviar</ButtonGoTrip>
                </DivContainerForm>
            </DivFormAplly>
        </ContainerForm>
    )
}

export default FormPage