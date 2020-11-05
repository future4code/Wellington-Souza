import react from 'react';
import axios from 'axios';
import styled from "styled-components"


const Botao = styled.button `
    margin-left: 2px;
    border: none;
    background-color: orange;
    height: 24px;
    color: white;
`

class CriaPlayList extends react.Component{

    state={
        nameValue: ""
    }

    criaPlayList = () => {
        const body = {
            name: this.state.nameValue
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers:{
                Authorization: "wellington-brito-dumont"
            }
        }).then(()=>{
           console.log("Playlist criada!") 
           this.setState({nameValue: ""})
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    onChangeCriaPlayList = (event) => {
        this.setState({nameValue: event.target.value})
    }

    render(){
        
        return(
            <div>
               
                    <input 
                        placeholder="Nome da playlist" 
                        value={this.state.nameValue}
                        onChange={this.onChangeCriaPlayList}               
                    />
                    <Botao onClick={this.criaPlayList}>Criar Playlist</Botao>
                
                        
            </div>
            
        )
    }
}

export default CriaPlayList