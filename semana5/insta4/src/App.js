import React from 'react';
import './App.css';
import Post from './components/Post/Post';


class App extends React.Component {

  state = {
 
    usuarios: [
      {
        nomeDoUsuario: "Paulinha",
        fotoDoUsuario: "https://picsum.photos/50/50",
        fotoDoPost: "https://picsum.photos/200/150"
      },
      {
        nomeDoUsuario: "Aninha",
        fotoDoUsuario: "https://picsum.photos/id/50/50/300",
        fotoDoPost: "https://picsum.photos/200/150/?blur"
      },
      {
        nomeDoUsuario: "Thiago",
        fotoDoUsuario: "https://picsum.photos/50/50?grayscale",
        fotoDoPost: "https://picsum.photos/seed/picsum/200/150"
      }

    ]

  }

  render() {

    const listaDeUsuarios = this.state.usuarios.map ((usuario) =>{
      return (
        <div>
        <Post 
          nomeUsuario = {usuario.nomeDoUsuario}
          fotoUsuario = {usuario.fotoDoUsuario}
          fotoPost = {usuario.fotoDoPost}
        />
       </div> 
      )
    })
    return (
      <div>
        {listaDeUsuarios}
      </div>
    );
  }
}

export default App;
