import React, { Component } from 'react';
import './App.css';
import html from '../Categories/html.jpg';
import node1 from '../Categories/node1.png';
import UserActions from "./User_actions";
import FeedCard from './feedcard';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      feeds:[]}
  }
  componentWillMount(){
     var self = this;
   axios.get(`http://localhost:4000${self.props.match.url}`).then(function(response){
       self.setState({feeds:response.data})
       
   }).catch(function (error){
     console.log(error)
   })
  
}


    render(){
     return(
      <div className="App">
        <div className="stat"/>
        <UserActions/>
        <div className='flex-container'>
            {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value}  />))}
        </div>
      </div>
     )
    }

}



export default App;
