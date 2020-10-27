import react from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ListaDeUsuario from "./componentes/listaDeUsuario"

const AppContainer = styled.div`
  
  width: 20vw;
  margin: 0 auto;
  margin-top: 100px;
`
const CaixaDeTexto = styled.input`
  border-radius: 5px;
  margin-left: 8px;
  width: 200px;
  margin-top: 16px

`

class App extends react.Component {

  state = {
    usuarios:[],
    usuarioNomeValue: "",
    usuarioEmailValue: "",
    vaiPraLista: false    
  }

  
    
  criarUsuario = () => {
    const body = {
      name: this.state.usuarioNomeValue,
      email: this.state.usuarioEmailValue
    }

    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
        headers: {
          Authorization: "wellington-brito-dumont"
        }
      }
    )
    .then((response)=>{
      this.setState({usuarioNomeValue: "", usuarioEmailValue: ""})
      alert("Usuário criado com sucesso!",response.data)
    })
    .catch((error)=>{
      alert(error.message)
    })
  }

  onChangeUsuarioValor = (event) => {
    this.setState({usuarioNomeValue: event.target.value})
  }

  onChangeEmailValor = (event) => {
    this.setState({usuarioEmailValue: event.target.value})
  }

  vaiParaLista = () =>{
    this.setState({vaiPraLista: true})
  }

  voltaParaCadastro = () => {
    this.setState({vaiPraLista: false})
  }

  render(){

    const renderizaUsuarios = () => {
      if (this.state.vaiPraLista){
        return <ListaDeUsuario vaiParaCadastro = {this.voltaParaCadastro} />
      }else {
        return <button onClick = {this.vaiParaLista}>Ir para página de lista</button> 
      }
    }

    return (
      <AppContainer>
        <div>
          <label>
          Nome:
            <CaixaDeTexto 
            value={this.state.usuarioNomeValue}
            onChange = {this.onChangeUsuarioValor}
            />
          </label>
        </div>
        <div>
          <label>
          E-mail:
            <CaixaDeTexto 
            value={this.state.usuarioEmailValue}
            onChange = {this.onChangeEmailValor}
            />
          </label>
        </div>
        <button onClick = {this.criarUsuario}>Salvar</button> 
        <button onClick = {this.vaiParaLista}>Ir para página de lista</button>
        {renderizaUsuarios}
        

      </AppContainer>
    );
  }
  
}

export default App;
