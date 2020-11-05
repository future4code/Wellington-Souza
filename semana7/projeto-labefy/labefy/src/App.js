import react from 'react';
import CriaPlayList from './componentes/criaPlayList';
import VisualizaList from './componentes/visualizaPlayList';
import styled from "styled-components"

const ContainerForm = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
`

const BotaoVoltar = styled.button`
  margin-top: 16px;

`



class App extends react.Component {

   state = {
     verLista: false,
   }

   onClickVerLista = () => {
     this.setState({verLista: true})
   }

   onClickRetorna = () => {
     this.setState({verLista: false})
   }

  render(){

    const renderViewLista = () => {
      return (
        this.state.verLista === true ? 
          <VisualizaList onClickRetorna={this.onClickRetorna}  /> : 
            <ContainerForm>
              <CriaPlayList />
              <BotaoVoltar onClick={this.onClickVerLista}>Visualizar Minhas Playlist</BotaoVoltar>
            </ContainerForm>
        )
    }

    return (
      <div>
        {renderViewLista()}
      </div>
    );
  }
 
}

export default App;
