import React from 'react'
import './Habilidades.css'

export function Habilidades (props){
    return(
        <div className = "habilidades">
            <h4>Minhas Habilidades</h4>
            <div>
                <ul>
                    <li>{props.texto}</li>
                </ul>
            </div>
        </div>

    )
}