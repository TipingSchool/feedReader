import React, { Component } from 'react';
import mongo from './mongo.jpg';
import './App.css';


const CatCard = (props) =>{
  return(
    <div>
      <div className='card-box'>
            <img src={props.imgsrc} className='card-img'/>
            <p> {props.name} </p>
            </div>
      </div>
  )
}

class App extends Component {
        constructor(props){
          super(props);
          this.state ={
            CardValue :[{'imgsrc':mongo, 'name':'MongoDB'},{'imgsrc':mongo, 'name':'NodeJS'},{'imgsrc':mongo, 'name':'NodeJS'},
            {'imgsrc':mongo, 'name':'NodeJS'},{'imgsrc':mongo, 'name':'NodeJS'}]
          }
        }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <nav>
            <span className='nav-span'>Feeds</span>
            <span className='nav-span'>Login</span>
            <input type='text' value='search' />
          </nav>
        </div>
        <div className='flex-container'>
         {this.state.CardValue.map((value) => <CatCard {...value}/>)}

        </div>
      </div>
    );
  }
}

export default App;
