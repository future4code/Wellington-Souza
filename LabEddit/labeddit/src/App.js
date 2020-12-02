import React from 'react'
import NavBar from './components/navBar/NavBar';
import Router from './routes/Router'
import {BrowserRouter} from 'react-router-dom'
import { Container } from './styled';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Container>
          <Router />
         </Container>
                
      </BrowserRouter>
  );
}

export default App;
