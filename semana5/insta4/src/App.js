import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Pietra'}
          fotoUsuario={'https://picsum.photos/id/50/50/300'}
          fotoPost={'https://picsum.photos/200/150/?blur'}
        />
        <Post
          nomeUsuario={'Thiago'}
          fotoUsuario={'https://picsum.photos/50/50?grayscale'}
          fotoPost={'https://picsum.photos/seed/picsum/200/150'}
        />
        
      </div>
    );
  }
}

export default App;
