import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Input from './components/input';

const array1 = ["instagram","whatsapp","uber",
                "usman","alo","asdasd",
                "list of data","data"];

             
                 
class App extends React.Component {

   state ={
     text:"" ,
     list :array1 ,
     Index :""
   }
  handletext = (e)=>{
    this.setState({list:
      array1.filter(name => 
        name.includes(e.target.value))
    })

    
  }


  maptheitem =()=>{

     
    return(this.state.list!==""? 
      (this.state.list.map((number) =><li>{number}</li>)):'No data found');
  }


  findIndexusingmethod = (e)=>{
    
    return(this.state.list.length>-1? 
    (this.setState({Index:this.state.list.findIndex(x => x == e.target.value)})):""
    );
  }


  render(){
    return(
      <div>
        
      <input name="text" 
      onChange={this.handletext}
      />
      <Input
      action={this.findIndexusingmethod}
      />
        {
          '                       '
        }
      {this.state.text}
      <h5>{this.state.Index===""?'':this.state.Index+1}</h5>
      <ol>
      {this.maptheitem()}
      </ol>

        
      </div>
    )
  }
    
  }



  export default App;


  