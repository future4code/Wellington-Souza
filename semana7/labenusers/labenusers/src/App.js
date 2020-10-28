import react from 'react'
import styled from 'styled-components'
import CadastroPage from './componentes/CadastroPage'
import ListaPage from "./componentes/ListaDeUsuario"


const AppContainer = styled.div`
  
  width: 20vw;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid blue;
  padding: 20px;
`

class App extends react.Component {

  state= {
    goToUsuario: true
  }

  renderizaListaUsario = () => {
    this.setState({goToUsuario: false})
  }

  renderizaCadastro = () => {
    this.setState({goToUsuario: true})
  }
  render(){
    const renderizaLista = () =>{
      if(this.state.goToUsuario){
        return <CadastroPage irParaLista={this.renderizaListaUsario} />
      }else{
        return <ListaPage voltaCadastro={this.renderizaCadastro} />
      }
    }
     return (
      <AppContainer>
        {renderizaLista()}
        
      </AppContainer>
    );
  }
  
}

export default App;
