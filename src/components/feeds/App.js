import React, { Component } from 'react';
import './App.css';
import FeedCard from './feedcard';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      feeds:[]}
  }

  componentWillReceiveProps(nextProp){
    var currentLocation = this.props.location.pathname + this.props.location.search
    var nextLocation = nextProp.location.pathname  + nextProp.location.search
    if(currentLocation !== nextLocation){
      var self = this;
      axios.get(`http://localhost:4000${nextLocation}`).then(function(response){
        self.setState({feeds:response.data});
       }).catch(function (error){
         console.log(error);
       });
    }
}

  componentWillMount(){
     var self = this;
     axios.get(`http://localhost:4000${ self.props.location.pathname + self.props.location.search}`).then(function(response){
       self.setState({feeds:response.data});
      }).catch(function (error){
        console.log(error);
      });
  }
  

    render(){
     return(
      <div className="App">
        <div className="stat"/>
        <div className='grid-container'>
          <div className='filters'>
          
          </div>
          <div >
              {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value}  />))}   
          </div>  
        </div>
      </div>
     )
    }
}



export default App;
