import React, { Component } from 'react';
import mongo from './mongo.jpg';
import node from './node.png';
import react from './react.png';
import webdev from './webdep.jpg';
import devop from './devops.jpg';
import html from './html.jpg';
import './App.css';


class CatCard extends Component{
  constructor(props){
    super(props);
  
  }
  ClickHandler = () =>{
    alert('you clicked ' + this.props.name);
  }

  render(){
    return(
    <div>
      <div className='card-box' onClick = {this.ClickHandler}>
        <div>
            <img src={this.props.imgsrc} className='card-img' alt={this.props.name}/>
            <p> {this.props.name} </p>
            </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
        constructor(props){
          super(props);
          this.state ={
            CardValue :[{'imgsrc':mongo, 'name':'MongoDB'},{'imgsrc':node, 'name':'NodeJS'},{'imgsrc':react, 'name':'ReactJS'},
            {'imgsrc':webdev, 'name':'Web Development'},{'imgsrc':devop, 'name':'DevOps'},{'imgsrc':html, 'name':'HTML5'}]
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
        <div className="stat">
          </div>
        <div className='flex-container' >
         {this.state.CardValue.map((value,i) =>(  <CatCard key={i} {...value}  />))}
        </div>
      </div>
    );
  }
}

export default App;
