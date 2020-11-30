import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const SignUpPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            history.push("/feeds")
        }
    },[history])

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }

    const handleUserName = (event) =>{
        setUserName(event.target.value)
    }

    const goSignUp = (event) => {

        event.preventDefault()

        const body = {
            email: email,
            password: password,
            username: userName
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body)
            .then((response)=>{
                localStorage.setItem("token", response.data.token)
                history.push("/feeds")
            }).catch((error)=>{
                console.log(error)
            })
     }

    return(
        <div>
            <form onSubmit={goSignUp}>
                <label>Nome de usuário</label>
                <input 
                    name="username"
                    type="text"
                    placeholder="Digite o seu e-mail!"
                    value={userName}
                    onChange={handleUserName}
                    required
                />
                <label>E-mail</label>
                <input 
                    name="email"
                    type="email"
                    placeholder="Digite o seu e-mail!"
                    value={email}
                    onChange={handleEmail}
                    required
                />
                 <label>Senha</label>
                <input 
                    name="senha"
                    type="password"
                    placeholder="Digite o sua senha"
                    value={password}
                    onChange={handlePassword}
                    required
                />
                 <button onClick={goSignUp}>Cadastrar</button>
            </form>
        </div>
    )
}

export default SignUpPage