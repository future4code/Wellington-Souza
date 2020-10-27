import react from 'react'
import styled from 'styled-components'
import axios from 'axios'

class ListaDeUsuario extends react.Component{

    state={
        usuarios:[],
        
    }
    
    componentDidMount = () => {
        this.pegaUsuario()
      }
    
      pegaUsuario =()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
          headers:{
            Authorization: "wellington-brito-dumont"
          }
        }).then((resposta)=>{
          console.log(resposta.data)
          this.setState({usuarios: resposta.data})
        })
        .catch((erro)=>{
          console.log(erro.message)
        })
      }
    
          
    

    render(){
    const renderizaUsuarios = this.state.usuarios.map((usuario)=>{
        return <p key={usuario.id}>{usuario.name}</p>
      })
  

        return(
            <button onClick={this.props.vaiParaCadastro}>Voltar para o cadastro</button>
        )
    }
}

export default ListaDeUsuario