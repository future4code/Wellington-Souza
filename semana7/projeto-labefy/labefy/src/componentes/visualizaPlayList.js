import react from 'react';
import axios from 'axios';

class VisualizaList extends react.Component{
    state= {
        playList:[],
        trackList: [],
        abreList: false,
        nameValue: "",
        artistValue: "",
        urlValue: ""
        
    }
   // PEGA A PLAYLIST ----------------------------------
    pegaPlayList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers:{
                Authorization: "wellington-brito-dumont"
            }
        }).then((resposta)=>{
            // console.log(resposta.data)
            this.setState({playList: resposta.data.result.list});
        }).catch((error)=>{
            console.log(error.message)
        })
    }


    componentDidMount = () => {
        this.pegaPlayList()
    }

// PEGA AS MÚSICAS DA PLAYLITS --------------------------

    getTrackList = (trackId, TrackName) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${trackId}/tracks`, {
            headers:{
                Authorization: "wellington-brito-dumont"
            }
        }).then((resposta)=>{
            console.log(resposta.data.result.tracks)
            this.setState({trackList: resposta.data.result.tracks})
        }).catch((error)=>{
            console.log(error.message)
        })

        this.setState({abreList: true})
    }

// DELETA A PLAYLIST ------------------------------
    deleteLista = (listId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listId}`, {
            headers:{
                Authorization: "wellington-brito-dumont"
            }
        }).then((resposta)=>{
            alert("Esta PlayList foi deletada!")
            this.pegaPlayList()
        }).catch((error)=>{
            console.log(error.message)
        })
    }
// ADICIONA MÚSICAS NA PLAYLIST ------------------------

    criaMusica = (playListId) => {
        const body = {
            name: this.state.nameValue,
            artist: this.state.artistValue,
            url: this.state.urlValue
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playListId}/tracks`, body, {
            headers: {
                Authorization: "wellington-brito-dumont"
            }
        }).then((resposta)=>{
            alert("Musica adicionada com sucesso")
            this.setState({nameValue:"", artistValue:"", urlValue:""})
            this.getTrackList()
        }).catch((erro)=>{
            console.log(erro.message)
        })
    }

    onChangeNameMusica = (event) =>{
        this.setState({nameValue: event.target.value})
    }

    onChangeArtistMusica = (event) =>{
        this.setState({artistValue: event.target.value})
    }

    onChangeUrlMusica = (event) =>{
        this.setState({urlValue: event.target.value})
    }

    render(){
        const renderList = this.state.playList.map((lista) => {
            return (
              <p key={lista.id}>
                {lista.name}
                <button onClick={()=>this.getTrackList(lista.id)}>Abrir Playlist</button>
                <button onClick={()=> this.deleteLista(lista.id)}>Deletar Playlist</button>
                <div>
                     <button onClick={this.props.onClickRetorna}>Voltar</button>
                </div>
              </p>
            );
          });
         
         const renderTrack = this.state.trackList.map((track)=>{
             return(
                <div>
                   
                    <div>
                        <p key={track.name}>Música: {track.name}</p>
                        <p key={track.artist}>Artista: {track.artist}</p>
                        <audio 
                        key={track.url}
                        controls src={track.url}
                        />

                    </div>
                </div>
             )
         })
         
        return(
            <div>
                {this.state.abreList === true ? 
                    <div>
                        <input 
                            placeholder="Digite o nome da musica"
                            value={this.state.nameValue}
                            onChange={this.onChangeNameMusica}
                        />
                        <input 
                            placeholder="Digite o nome da Banda/Cantor(a)"
                            value={this.state.artistValue}
                            onChange={this.onChangeArtistMusica}
                        />
                        <input 
                            placeholder="Digite a url da música"
                            value={this.state.urlValue}
                            onChange={this.onChangeUrlMusica}
                        />
                        
                        <button onClick={(playList)=>this.criaMusica(playList.id)}>Adicionar Música</button>
                        <div>
                            {renderTrack}
                        </div>
                    </div>
                    
                 : renderList}
            </div>
        )
    }
}

export default VisualizaList