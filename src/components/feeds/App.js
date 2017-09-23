import React, { Component } from 'react';
import './App.css';
import UserActions from "./User_actions";
import FeedCard from './feedcard';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feeds:[],
    }
   this.selectedFeeds = [];
  }

  componentWillMount(){
     var self = this;
     axios.get(`http://localhost:4000${self.props.match.url}`).then(function(response){
       self.setState({feeds:response.data});
      }).catch(function (error){
        console.log(error);
      });
  }
  
  removingFeedTitleFromArray = (feedTitle) => {
    this.selectedFeeds.splice(this.selectedFeeds.indexOf(feedTitle), 1);
    console.log(this);
  }

  addingFeedTitleToArray = (feedTitle) => {
    this.selectedFeeds.push(feedTitle);
    console.log(this);
  }
    render(){
      if(this.selectedFeeds.length === 0){
      console.log(this);
        return(
          <div className="App">
            <div className="stat"/>
            <div className='flex-container'>
                {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value} addingFeedTitleToArray = { this.addingFeedTitleToArray } removingFeedTitleFromArray = { this.removingFeedTitleFromArray }/>))}   
            </div>  
          </div>
          );
    }
    else{
      return(
        <div className="App">
          <div className="stat"/>
          <UserActions/>
          <div className='flex-container'>
              {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value} addingFeedTitleToArray = { this.addingFeedTitleToArray } removingFeedTitleFromArray = { this.removingFeedTitleFromArray }/>))}   
          </div>  
        </div>
      );
    }
  }
}


export default App;
