import react from 'react';
import axios from 'axios';

class Detalhes extends react.Component{

    state={
        nameValue: "",
        artistValue: "",
        urlValue: ""
    }

    addMusica = (trackId) => {
        const body = {
            name: this.state.nameValue,
            artist: this.state.artistValue,
            url: this.state.urlValue
        }

         axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${trackId}/tracks`, body, {
            headers:{
                Authorization: "wellington-brito-dumont"
            }
        }).then((reposta)=>{
            alert(`Música ${this.state.nameValue} adicionada com sucesso!!`)
            this.setState({nameValue: "", artistValue:"", urlValue:""})
        }).catch((error)=>{
            alert("Por favor confira a música!")
            console.log(error.message)
        })

    }

    onChangeName = (event) =>{
        this.setState({nameValue:event.target.value})
    }
   
    onChangeArtist = (event) =>{
        this.setState({artistValue:event.target.value})
    }
   
    onChangeUrl = (event) =>{
        this.setState({urlValue:event.target.value})
    }

    render(){
        const renderDetails = this.props.trackList.map((track)=>{
            return (
               <div key={track.id}>
                   <p>Música: {track.name}</p>
                   <p>Artista: {track.artist}</p>
                   <audio controls src={track.url}/>
               </div> 
            )
        })
        return(
            <div>
                <div>
                    <input 
                        placeholder="Adicione o nome da música"
                        value = {this.state.nameValue}
                        onChange = {this.onChangeName}
                    />
                    <input 
                        placeholder="Adicione o nome da banda ou artista"
                        value = {this.state.artistValue}
                        onChange = {this.onChangeArtist}
                    />
                    <input 
                        placeholder="Adicione a url da música"
                        value = {this.state.urlValue}
                        onChange = {this.onChangeUrl}
                    />
                    
                    <button onClick={()=>this.addMusica(this.props.playListId)}>Adicionar Musicas</button>
                </div>
                <h3>Suas Músicas</h3>
                {renderDetails}
                
                

            </div>
        )
    }
}

export default Detalhes