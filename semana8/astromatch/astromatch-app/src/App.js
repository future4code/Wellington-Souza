import React, {useState} from 'react'



import {AppContainer} from './Styled'
import CardContainer from './componentes/CardContainer/CardContainer'
import ListaLike from './componentes/ListaLike/ListaLike'



function App() {

  const [abreLista, setAbreLista] = useState(false)
  
  

 const abreALista = () =>{
   setAbreLista(!abreLista)
 }

  return (
    <AppContainer>
        {abreLista === true ? <ListaLike inicio={abreALista}/> : <CardContainer abreList={abreALista}/>}        
    </AppContainer>
  );
}

export default App;
