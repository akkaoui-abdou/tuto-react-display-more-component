import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class MyHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render (){
      return (
        <div>
          <img src={this.props.logo} width={this.props.longeur} alt="logo"/>
        </div>
      );
  }

}


class MyContent extends Component{
  render (){

const SectionDetail = {
  title :'titre Section 1',
  description :'description Section 1',
}

const Section1 = (props)=>{
  return <div>{props.section}<div>{SectionDetail.title}</div><div>{SectionDetail.description}</div></div>
}

const Section2 = (props)=>{
  return <div>{props.section}</div>
}



      return (
        <div className="container">
         <Section1 section ="Sesction 1"/>
         <Section2 section ="Sesction 2"/>
        </div>
      );
  }

}

class MyFooter extends Component{

  constructor(props){
    super(props);
    this.state = {
      isToggled:true,
    };

    this.showval= this.showval.bind(this);
  }

showval(e){
    e.preventDefault();
    this.setState(state=>({
      isToggled:!state.isToggled
    }));

 }

  render (){
    
      return (
        <div className="container">
         <button onClick={this.showval}>{this.state.isToggled?' ON':'OFF'}</button>
         
        </div>
      );
  }

}


class App extends Component {
   constructor(props){
      super(props);
      
      
      this.state = {employer: [
         {id:100,name:'LIONEL MESSI',age:36},
         {id:101,name:'CRISTIANO RONALDO',age:26},
         {id:102,name:'MOHAMED SALAH',age:22},
         {id:103,name:'IDIN HAZARD',age:43},
             ]
      };
      
      
      }
render() {

function ListeItem(props){
  return  (
                      <tr >
                        <td> {props.value.id} </td>
                        <td> {props.value.name} </td>
                        <td> {props.value.age} </td>
                    
                    </tr>)
              
            
       
}


function ListItems(props){
  const employer = props.employer;
  const ListItem = employer.map((number,index)=>
    <ListeItem key={index} value={number} ></ListeItem>
    );
    return (<div>
      <table><thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
             
                  </tr>
                  </thead>  
                  <tbody>  {ListItem} </tbody>
                 </table>
                 </div>
    )

}

 

    return (
      <div className="App">
        <MyHeader logo = {logo} longeur = '200' />
        <MyContent/>
        <MyFooter/>
        <ListItems employer ={this.state.employer} />
      </div>
    );
  }
}

export default App;
