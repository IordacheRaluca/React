import React,  { Component } from "react";
import {PersonModel} from './PersonModel';
import peopleData from './people.json';
import {Buttons} from './Buttons';

export class PersonTable extends Component{
   constructor(props){
      super(props)
      this.people = peopleData;
      console.log(this.people)
      this.state = {
         people: this.people
      }
   }

   renderTableData(){
      return this.state.people.map((person) => {
         return (
            <tr key={person.id}>
               <td>{person.id}</td>
               <td>{'.'}</td>
               <td>&nbsp;</td>
               <td>{person.firstName}</td>
               <td>{person.lastName}</td>
               <td>{person.age}</td>
            </tr>
         )
      })
   }

   

   render() {
      return (
         <div>
            <h1 id='title'>People</h1>
            <table id='people'>
               <tbody>
                  {this.renderTableData()}
                    
               </tbody>
            </table>
         <Buttons/>
         </div>
      )  
   }
}