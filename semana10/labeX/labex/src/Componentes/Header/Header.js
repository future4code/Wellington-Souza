import React from 'react'
import {useHistory} from "react-router-dom"
import { ContainerHeader, Logo, Nav } from './headerStyles'



function Header () {

    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const goToTripList = () => {
        history.push("/trip/list")
    }


    return(
        <ContainerHeader>
            <Logo>LabeX</Logo>
            <Nav onClick={goToHome}>Home</Nav>
            <Nav onClick={goToTripList}>Viagens</Nav>
            

         </ContainerHeader>
    )
}

export default Header