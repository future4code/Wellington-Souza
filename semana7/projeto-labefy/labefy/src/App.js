import react from 'react';
import CriaPlayList from './componentes/criaPlayList';
import VisualizaList from './componentes/visualizaPlayList';

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
            <div>
              <CriaPlayList />
              <button onClick={this.onClickVerLista}>Visualizar Minhas Playlist</button>
            </div>
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
