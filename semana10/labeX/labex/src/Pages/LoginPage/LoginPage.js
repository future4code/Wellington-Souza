import React from 'react'
import { useHistory } from 'react-router-dom'
import { Logo } from '../../Componentes/Header/headerStyles'
import { ButtonAdm, ContainerFormLogin, ContainerLogin, FormLogin, FormTitle, LogoLabeX, ParagraphLogin } from './LoginStyle'


function LoginPage () {

    const history = useHistory()

    const goToTripList = () => {
        history.push("/trip/list")
    }

    return(
        <ContainerLogin>
            <LogoLabeX>LabeX</LogoLabeX>
            <ContainerFormLogin>
                <FormTitle>Login</FormTitle>
                <ParagraphLogin>Por favor insira os dados de administrador.</ParagraphLogin>
                <hr />
                <FormLogin placeholder="Digite seu e-mail"/>
                <FormLogin type="Password" placeholder="Digite sua senha"/>
                <ButtonAdm onClick={goToTripList}>Entrar</ButtonAdm>
            </ContainerFormLogin>
        </ContainerLogin>
    )
}

export default LoginPage