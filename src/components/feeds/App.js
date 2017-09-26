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
      selectedFeedCount : 0
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
    this.setState(
      {
        selectedFeedCount : this.state.selectedFeedCount - 1
      }
  );
    console.log(this);
  }

  addingFeedTitleToArray = (feedTitle) => {
    this.selectedFeeds.push(feedTitle);
    this.setState(
    {
      selectedFeedCount : this.state.selectedFeedCount + 1
    }
  );
    console.log(this);
  }
    render(){
      var UserActionDisplay = !(this.state.selectedFeedCount) || false;
      return(
        <div className="App">
          <div className="stat"/>
          <UserActions UserActionDisplay = { UserActionDisplay } selectedCount = { this.state.selectedFeedCount }/>
          <div className='flex-container'>
              {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value} addingFeedTitleToArray = { this.addingFeedTitleToArray } removingFeedTitleFromArray = { this.removingFeedTitleFromArray }/>))}   
          </div>  
        </div>
      );
    }
  
}


export default App;
