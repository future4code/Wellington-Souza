import react from 'react';
import axios from 'axios';
import Detalhes from './Detalhes';

class VisualizaList extends react.Component{
    state= {
        playList:[],
        trackList: [],
        abreList: false,
        playListId: ""
               
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
            this.setState({trackList: resposta.data.result.tracks, playListId: trackId})
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
                           
        return(
           this.state.abreList === true ? 
            <Detalhes 
            trackList={this.state.trackList} 
            playListId = {this.state.playListId}
        /> : <div>
                {renderList}
            </div>
        
        
        )
    }
}

export default VisualizaList