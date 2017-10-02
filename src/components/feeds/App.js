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
    this.selectedFeedsIndexArray = [];
  }
   
  componentWillMount(){
     var self = this;
     axios.get(`http://localhost:4000${self.props.match.url}`)
      .then(function(response){
       self.setState({feeds:response.data});
      })
      .catch(function (error){
        console.log(error);
      });
  }
  
  removingFeedTitleFromSelectedFeedsArray = (feed, feedIndex) => {
    this.selectedFeeds.splice(this.selectedFeeds.indexOf(feed), 1);
    this.selectedFeedsIndexArray.splice(this.selectedFeedsIndexArray.indexOf(feedIndex), 1);
    this.setState(
      {
        selectedFeedCount : this.state.selectedFeedCount - 1
      }
    );
  }

  addingFeedTitleToSelectedFeedsArray = (feed, feedIndex) => {
    this.selectedFeeds.push(feed);
    this.selectedFeedsIndexArray.push(feedIndex);
    this.setState(
      {
        selectedFeedCount : this.selectedFeeds.length
      }
    );
  }

  
  deleteFeedAction = () => {
      var self = this;
      if(this.selectedFeeds.length > 0){
        axios.post(`http://localhost:4000${self.props.match.url}`,{
            data : self.selectedFeeds,
            action : "delete"
        }
      ).then(function(response){
        console.log("delete post sent");
      });
      
      let currentFeed = this.state.feeds;
      let len = this.selectedFeedsIndexArray.length;
      for(var i = 0; i < len; i++){
        currentFeed.splice(this.selectedFeedsIndexArray[i], 1);
      }
      this.setState({
        feeds : currentFeed,
        selectedFeedCount : this.selectedFeedsIndexArray.length
      });
    }
  }

  archiveFeedAction = () => {
    var self = this;
    if(this.selectedFeeds.length > 0){
      axios.post(`http://localhost:4000${self.props.match.url}`,{
        data : self.selectedFeeds,
        action : "archive"
      }).then(function(response){
        console.log("post archived");
      });
      
      let currentFeed = this.state.feeds;
      let len = this.selectedFeedsIndexArray.length;
      for(var i = 0; i < len; i++){
        currentFeed.splice(this.selectedFeedsIndexArray[i], 1);
      }
      this.setState({
        feeds : currentFeed,
        selectedFeedCount : this.selectedFeedsIndexArray.length
      });
    }
  }

    render(){
      console.log(this);
      var UserActionDisplay = !(this.state.selectedFeedCount) || false;
      return(
        <div className="App">
          <div className="stat"/>
          <UserActions UserActionDisplay = { UserActionDisplay } selectedCount = { this.state.selectedFeedCount } selectedFeed = { this.selectedFeeds } deleteFeedAction = { this.deleteFeedAction } archiveFeedAction = { this.archiveFeedAction }/>
          <div className='flex-container'>
              {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value} indexPosition = {i} addingFeedTitleToSelectedFeedsArray = { this.addingFeedTitleToSelectedFeedsArray } removingFeedTitleFromSelectedFeedsArray = { this.removingFeedTitleFromSelectedFeedsArray }/>))}   
          </div>  
        </div>
      );
    }
  
}


export default App;
