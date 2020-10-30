import Axios from 'axios';
import react from 'react';
import axios from 'axios'


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
                <div>
                    <input 
                        placeholder="Nome da playlist" 
                        value={this.state.nameValue}
                        onChange={this.onChangeCriaPlayList}               
                    />
                    <button onClick={this.criaPlayList}>Criar Playlist</button>
                 </div>
                        
            </div>
            
        )
    }
}

export default CriaPlayList