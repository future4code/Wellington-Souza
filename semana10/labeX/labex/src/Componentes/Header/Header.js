import React from 'react'
import {useHistory} from "react-router-dom"
import { ContainerHeader, Logo, Nav } from './headerStyles'



function Header () {

    const history = useHistory()

    const goToLogin = () => {
        history.push("/login")
    }

    return(
        <ContainerHeader>
            <Logo>LabeX</Logo>
            <Nav onClick={goToLogin}>Login Administrador</Nav>
        </ContainerHeader>
    )
}

export default Header