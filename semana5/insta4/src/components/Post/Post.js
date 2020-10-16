import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeBookMarkBranco from '../../img/bookmarks.svg'
import iconeBookMarkPreto from '../../img/bookmarks2.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    marcador: false,
    numeroComentarios: 0
    
  }

  onClickCurtida = () => {
   this.setState({
     curtido: !this.state.curtido
   })

   if (!this.state.curtido){
     this.setState({
       numeroCurtidas: this.state.numeroCurtidas + 1
     })
   }else {
     this.setState({
       numeroCurtidas: this.state.numeroCurtidas - 1
     })
   }
  }

  onClickMarcacao = () => {
    this.setState({
      marcador: !this.state.marcador
    })

  }
  
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })

  }


  render() {

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    
    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeMarcador 

    if(this.state.marcador){
      iconeMarcador = iconeBookMarkPreto
    }else {
      iconeMarcador = iconeBookMarkBranco
    }

    

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeMarcador}
          onClickIcone={this.onClickMarcacao} 
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post