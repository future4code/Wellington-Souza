import React from 'react';
import './CardPequeno.css';

export function CardPequeno (props){
    return(
        <div className="cardpequeno-container" >
            <img src={ props.imagem } />
            <div>
                <h5>{props.dados}</h5>
                <p>{props.endereco}</p>
            </div>
        </div>
        )
}