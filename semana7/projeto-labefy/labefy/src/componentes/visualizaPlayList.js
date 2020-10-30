import react from 'react';
import axios from 'axios';
import {PlayListDetalhe} from './detalhesPlayList';

class VisualizaList extends react.Component{
    state= {
        playList:[],
        abreList: false,
        trackList: [],
        details: false,
    }

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

    pegaTrackList = (trackId) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${trackId}/tracks`, {
            headers:{
                Authorization: "wellington-brito-dumont"
            }
        }).then((resposta)=>{
            this.setState({trackList: resposta.data})
        }).catch((error)=>{
            console.log(error.message)
        })
    }
    
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
                <button onClick={()=>this.pegaTrackList(lista.id)}>Abrir Playlist</button>
                <button onClick={()=> this.deleteLista(lista.id)}>Deletar Playlist</button>
              </p>
            );
          });

          const abrePlayList = () => {
              return (
                  this.state.abreList === true ? <PlayListDetalhe /> : 
                <div>
                  <h1>Está é a sua Playlist</h1>
                  <button onClick={this.props.onClickRetorna}> Voltar pra a home</button>
                  <div>{renderList}</div>
              </div>
              )
          }
        
        
        return(
            <div>
                {abrePlayList()}
            </div>
        )
    }
}

export default VisualizaList