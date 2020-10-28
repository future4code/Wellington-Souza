import react from 'react';
import axios from "axios";
import styled from "styled-components"

const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class ListaPage extends react.Component{

    state={
        usuarios:[]
    }

    componentDidMount = () => {
        this.pegarLista()
     }

    pegarLista = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
    headers:{
        Authorization: "wellington-brito-dumont"
    }

    }).then((resposta)=>{
        this.setState({usuarios: resposta.data})
    }).catch((error)=>{
        console.log(error.message)
    })
    }

    deleteUsuario = (usuarioId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, {
            headers:{
                Authorization: "wellington-brito-dumont"
            }
        }).then(()=>{
            alert("Usuário deletado!")
            this.pegarLista()
        }).catch((erro)=>{
            alert(erro.message)
        })
    }
    
    render(){
        const renderizaUsuario = this.state.usuarios.map((usuario)=>{
            return(
                <p key = {usuario.id}>
                    {usuario.name}
                    <button onClick={()=>this.deleteUsuario(usuario.id)}>Detetar</button>
                </p>
            )
        })
        return(
            <ContainerLista>
                <h4>Lista de Usuário</h4>
                {renderizaUsuario}
                <button onClick={this.props.voltaCadastro}>Voltar para o cadastro</button>
            </ContainerLista>
        )
    }
}

export default ListaPage