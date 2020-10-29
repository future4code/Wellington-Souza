import React from "react"
import './App.css';
import styled from "styled-components"
import axios from "axios"

const AppContainer = styled.div`
    
    width: 50vw;
    display: flex;
 
    justify-content: center;
    align-items: center;
    margin-top: auto;
`
const BotaoAtividade = styled.button`
  margin-top: 50px;
  margin: 0 auto;
`

class App extends React.Component{

  state = {
     atividadeData: []
  }

  componentDidMount (){
    this.geraAtividade()
  }
  
  geraAtividade = () => {
    axios.get("http://www.boredapi.com/api/activity/").then((resposta)=>{
      console.log(resposta.data.activity)
      this.setState({atividadeData: resposta.data.activity})
    })
  }

  render(){
    console.log("AQUI ESTA ATIVIDADE", this.state.atividadeData)
      // const renderAtividade = this.state.atividadeData.map((atividade)=>{
      //   return (
      //     <p key={atividade.activity}>{atividade.activity}</p>
      //   )
      // })

      
    return(
        <AppContainer>
          <div>
          <BotaoAtividade>Gere uma atividade</BotaoAtividade>
           {/* {renderAtividade} */}
          </div>
        </AppContainer>
    )
  }
}

export default App