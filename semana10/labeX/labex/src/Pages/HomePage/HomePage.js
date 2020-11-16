import React from 'react'
import {MainContainer, Header, TripContainer, CardTrip} from './HomePageStyle'


function HomePage () {
    return(
        <MainContainer>
            <Header>
                <h1>LabeX</h1>
                <nav>
                    <p>Login</p>
                </nav>
            </Header>
            <TripContainer>
                <CardTrip>
                    <img src="https://picsum.photos/322/200" alt="Imagem" />
                    <h3>Ano novo em Mercúrio</h3>
                    <button>Detalhes</button>
                </CardTrip>
                
            </TripContainer>
        </MainContainer>
    )
}

export default HomePage