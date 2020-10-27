import React from 'react';
import styled from 'styled-components'

export class Opcoes extends React.Component{
    render(){
        
        return(
            <select>
                <option>{this.state.valor}</option>
            </select>
        )
    }
}
