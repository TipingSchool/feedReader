import React, { Component } from 'react';
import mongo from './mongo.jpg';
import './App.css';


class CatCard extends Component{
  constructor(props){
    super(props);
  
  }
  ClickHandler = () =>{
    alert('you clicked' + this.props.name);
  }

  render(){
    return(
    <div>
      <div className='card-box' onClick = {this.ClickHandler}>
            <img src={this.props.imgsrc} className='card-img' alt={this.props.name}/>
            <p> {this.props.name} </p>
            </div>
      </div>
    );
  }
}

class App extends Component {
        constructor(props){
          super(props);
          this.state ={
            CardValue :[{'imgsrc':mongo, 'name':'MongoDB'},{'imgsrc':mongo, 'name':'NodeJS'},{'imgsrc':mongo, 'name':'NodeJS'},
            {'imgsrc':mongo, 'name':'NodeJS'},{'imgsrc':mongo, 'name':'NodeJS'},{'imgsrc':mongo, 'name':'NodeJS'}]
          }
       
        }

  render() {
    var self = this;
    return (
      <div className="App">
        <div className="App-header">
          <nav>
            <span className='nav-span'>Feeds</span>
            <span className='nav-span'>Login</span>
            <input type='text' placeholder ='search'/>
          </nav>
        </div>
        <div className='flex-container' >
         {this.state.CardValue.map((value,i) =>(  <CatCard key={i} {...value}  />))}
        </div>
      </div>
    );
  }
}

export default App;
