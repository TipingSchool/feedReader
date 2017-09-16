import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import mongo from './mongo.jpg';
import node from './node.png';
import react from './react.png';
import webdev from './webdep.jpg';
import devop from './devops.jpg';
import html from './html.jpg';
import './App.css';


class App extends Component {
        constructor(props){
          super(props);
          this.state ={
            CardValue :[{'imgsrc':mongo, 'name':'MongoDB'},{'imgsrc':node, 'name':'NodeJS'},{'imgsrc':react, 'name':'ReactJS'},
            {'imgsrc':webdev, 'name':'Web Development'},{'imgsrc':devop, 'name':'DevOps'},{'imgsrc':html, 'name':'HTML5'}]
          }
       
        }

  render() {
   
    return (
      <div className="App">
        <div className="stat">
          </div>
        <div className='flex-container' >
         {this.state.CardValue.map((value,i) =>( <Link key={i} to={`/feeds/${value.name}`  } style={{ textDecoration: 'none',color:'black' }}>
          <CatCard key={i} {...value}  /></Link>))}
        </div>
      </div>
    );
  }
}



const CatCard = (props) =>(
    <div>
      <div className='cat-card-box' >
        <div>
            <img src={props.imgsrc} className='cat-card-img' alt={props.name}/>
            <p> {props.name} </p>
            </div>
        </div>
      </div>
    );
 

export default App;
