import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../Componentes/Header/Header'
import { Logo } from '../../Componentes/Header/headerStyles'
import { ButtonAdm, ContainerFormLogin, ContainerLogin, FormLogin, FormTitle, LogoLabeX, ParagraphLogin, GoBack } from './LoginStyle'


function LoginPage () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(token){
            history.push("/trip/list-adm")
        }
    },[history])

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassowrd = (event) => {
        setPassword(event.target.value)
    }

    
    const goLogin = () => {
        const body = {
            email: email,
            password: password
        }

        Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/wellington-dumont/login', body)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            history.push("/trip/list-adm")

        }).catch((error)=>{
            console.log(error)
        })
    }
    

    return(
        <ContainerLogin>
            
            <LogoLabeX>LabeX</LogoLabeX>
            <ContainerFormLogin>
                <FormTitle>Login</FormTitle>
                <ParagraphLogin>Por favor insira os dados de administrador.</ParagraphLogin>
                <hr />
                <FormLogin 
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={handleEmail}
                />
                <FormLogin 
                    type="Password" 
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={handlePassowrd}
                />
                <ButtonAdm onClick={goLogin}>Entrar</ButtonAdm>
                <GoBack onClick={goToHome}>Voltar</GoBack>
            </ContainerFormLogin>
        </ContainerLogin>
    )
}

export default LoginPage