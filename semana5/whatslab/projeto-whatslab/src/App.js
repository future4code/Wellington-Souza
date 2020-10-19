import React from 'react';
import {DivPrincipal, TelaDeMensagem, DivInput, InputNome, InputMensagem} from "./componentes/Componentes"



export class App extends React.Component {
  state = {
    mensagens: [],
    usuarioValor: "",
    mensagemValor: ""
}

onChangeUsuario = (event) => {
    this.setState({usuarioValor: event.target.value})
}

onChangeMensagem = (event) => {
    this.setState({mensagemValor: event.target.value})
}

adcionarMensagem = () =>{
    const novaMensagem = {
        usuario: this.state.usuarioValor,
        texto: this.state.mensagemValor
    }
    
    const umaNovaMensagem = [novaMensagem, ...this.state.mensagens]
    
    this.setState({mensagens: umaNovaMensagem, usuarioValor: "", mensagemValor:""})
}
 
  render(){
    return (
      <DivPrincipal>
        <TelaDeMensagem>
            {this.state.mensagens.map((mensagem) =>{
              return(
                <p>
                  <strong>{mensagem.usuario}: </strong>{mensagem.texto}
                </p>
              )
            })}

        </TelaDeMensagem>
        <DivInput>
          <InputNome
          placeholder = "Nome"
          onChange = {this.onChangeUsuario}
          value = {this.state.usuarioValor}
          />
          <InputMensagem 
          placeholder = "Mensagem"
          onChange = {this.onChangeMensagem}
          value = {this.state.mensagemValor}
          />
          <button onClick = {this.adcionarMensagem}>Enviar</button>
        </DivInput>
      </DivPrincipal>
   );
  }
}


export default App;
