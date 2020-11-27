import React from 'react'
import {useHistory} from "react-router-dom"
import { ContainerHeader, Logo, Menu, Nav } from './headerStyles'



function Header () {

    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const goToTripList = () => {
        history.push("/trip/list")
    }

    const goToLogin = () => {
        history.push("/login")
    }

    return(
        <ContainerHeader>
            <Logo>LabeX</Logo>
            <Menu>
                <Nav onClick={goToHome}>Home</Nav>
                <Nav onClick={goToTripList}>Viagens</Nav>
                <Nav onClick={goToLogin}>Administrador</Nav>
            </Menu>

         </ContainerHeader>
    )
}

export default Header