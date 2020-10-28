import react from 'react';
import axios from "axios";
import styled from 'styled-components'

const FormDiv = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

const Form = styled.input`
    margin-left: 10px;
    margin-bottom: 5px;

`
const BotaoSalvar = styled.button`
    background-color: blue;
    color: white;
    border: none;
    width: 100px;
    height: 20px;
    margin-bottom: 20px;
    
`


class CadastroPage extends react.Component{

    state = {
        nameValue: "",
        emailValue: "" 
    }

    criarUsuario = () =>{
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "wellington-brito-dumont"
            }
        }).then(()=>{
            alert("Usuário Cadastrado com Sucesso!!")
            this.setState({nameValue:"", emailValue:""})
        }).catch((error)=>{
            console.log(error.message)
        })
            
    }

    onChanceNameValue = (event) =>{
        this.setState({nameValue: event.target.value})
    }

    onChanceEmailValue = (event) =>{
        this.setState({emailValue: event.target.value})
    }
    render(){
        return(
            <div>
                <FormDiv>
                    <label>Nome</label>
                    <Form 
                        placeholder="Insira seu nome"
                        value={this.state.nameValue}
                        onChange = {this.onChanceNameValue}
                    />
                </FormDiv>
                <FormDiv>
                    <label>E-mail</label>
                    <Form 
                        placeholder="Insira seu e-mail"
                        value={this.state.emailValue}
                        onChange = {this.onChanceEmailValue}
                    />
                </FormDiv>
                <FormDiv>
                   <BotaoSalvar onClick={this.criarUsuario}>Salvar Usuário</BotaoSalvar>
                </FormDiv>
                <FormDiv>
                   <button onClick={this.props.irParaLista}>Ir para lista</button>
                </FormDiv>
            </div>
        )
    }
}

export default CadastroPage