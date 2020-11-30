import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {

    const [form, setForm] = useState({email:"", password:""})
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            history.push("/feeds")
        }
    },[history])

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const goToSignUp = () => {
        history.push("/cadastro")
    }

    const goLogin = (event) => {

        event.preventDefault()

        const body ={
            email: form.email,
            password: form.password
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body)
            .then((response)=>{
                localStorage.setItem("token", response.data.token)
                history.push("/feeds")
            }).catch((error)=>{
                console.log(error)
            })
    }

    return(
        <div>
            <form>
                <label>E-mail</label>
                <input 
                    name="email"
                    type="email"
                    placeholder="Digite o seu e-mail!"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                />
                 <label>Senha</label>
                <input 
                    name="password"
                    type="password"
                    placeholder="Digite o sua senha"
                    value={form.password}
                    onChange={handleInputChange}
                    required
                />
                <button onClick={goLogin}>Entrar</button>
                <button onClick={goToSignUp}>Cadastrar</button>
            </form>
        </div>
    )
}

export default LoginPage