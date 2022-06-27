import React,  { Component } from "react";
import styled from 'styled-components';
import peopleData from './people.json';
import { saveAs } from 'file-saver';
import { PersonModel } from "./PersonModel";


const theme = {
    green: {
        default: '#009688',
        hover: '#00796b'
    },
    red: {
        default: '#e53935',
        hover: '#b71c1c'
    }
}

const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    box-shadow: -2px 2px 2px #90a4ae;
    transition: ease background-color 400ms;
    cursor: pointer;
    margin: 10px 10px;
    &:hover {
        background-color: ${props => theme[props.theme].hover};
    }
`

Button.defaultProps={
    theme: 'green'
}


export  class Buttons extends Component{

    constructor(props){
        super(props)
    }

    clickAdd(){
        alert('Add button');

    }

    clickDelete(){
        // alert('asd')
        // peopleData.pop();
        // alert('asd1')
        // saveAs(peopleData, './people1.json')
        // alert('asd2')
        alert('Delete button')
    }

    renderButtons() {
        return (
            <>
            <div>
                <Button theme="green" onClick={this.clickAdd}>
                    Add
                </Button>
            </div>
            <div>
                <Button theme="red" onClick={this.clickDelete}>
                    Delete
                </Button>
            </div>
            </>
        );
    }

    render() {
        return (
            <div>
           
                {this.renderButtons()}
               
            </div>
        )  
    }

}

