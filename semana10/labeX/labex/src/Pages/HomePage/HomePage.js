import React from 'react'
import PrincipalContainer from '../../Componentes/ContainerSecundary/ConteinerSecundary'
import Header from '../../Componentes/Header/Header'
import { ButtonLogin, MainContainer, ButtonTripApp, ImageBackground, TittleInitial } from './HomePageStyle'



function HomePage () {
   

    return(
        <MainContainer>
            <Header></Header>
            <PrincipalContainer/>      
        </MainContainer>
    )
}

export default HomePage