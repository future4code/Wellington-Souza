import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import img from './img/eu.jpg'
import img2 from './img/web-development.svg'
import img3 from './img/graphic-designer.svg'
import img4 from './img/new-email.svg'
import img05 from './img/maps-and-location.svg'
import {CardPequeno} from './components/CardPequeno/CardPequeno'
import {Habilidades} from './components/Habilidades/Habilidades'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={img}
          nome="Wellington" 
          descricao="Oi, eu sou o Wellington. Sou estudante de desenvolvimento web da labenu. Sou formado em Design Gráfico mas estou amando estudar web.
          Sou criativo e uma pessoa muito bem humorada!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
        <CardPequeno 
        imagem={img4}
        dados="E-mail"
        endereco="wellingtonbrito@estudantelabenu.com"
        />

        <CardPequeno 
        imagem={img05}
        dados="Endereço"
        endereco="Rua Magalhães Bastos, 161"
        />
        
      <div>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={img2}
          nome="Estudante Web Labenu" 
          descricao="Aprendendo a desenvolver e criar soluções imagináveis!" 
        />
        
        <CardGrande 
          imagem={img3} 
          nome="Designer gráfico" 
          descricao="Formado em designer gráfico, especialista em Designer de interfaces" 
        />
      </div>

      <div>
        <h2>Habilidades</h2>
        <Habilidades texto="Criativo" />
        

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
