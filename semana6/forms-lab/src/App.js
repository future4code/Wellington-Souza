import React from 'react';
import styled from 'styled-components'
import { DadosGerais } from './componentes/Etapa1'
import { InfoEducacao } from './componentes/Etapa2'
import { InfoGeraisEnsino} from './componentes/Etapa3'
import { FimDoForm } from "./componentes/FimDoForm"

const AppConteudo = styled.div` 
    width: 500px;
    margin: 0 auto;
   
`


class App extends React.Component{
  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
      switch(this.state.etapa){
        case 1:
          return <DadosGerais />;
        case 2:
          return <InfoEducacao />;
        case 3:
          return <InfoGeraisEnsino />;
       
        }
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1})
  }


  render(){

    const etapas = this.state.etapa < 4 ?  
      <AppConteudo>
          {this.renderizaEtapa()}
          <button onClick = {this.irParaProximaEtapa} >Próxima Etapa</button>
      </AppConteudo> : 
      <AppConteudo>
        <FimDoForm />
      </AppConteudo>
      
    


    return(
      <AppConteudo>
        {etapas}
      </AppConteudo>
    )
  }
}

export default App;
