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
     axios.get(`http://localhost:4000${self.props.match.url}`)
      .then(function(response){
       self.setState({feeds:response.data});
      })
      .catch(function (error){
        console.log(error);
      });
  }
  
  removingFeedTitleFromSelectedFeedsArray = (feedTitle) => {
    this.selectedFeeds.splice(this.selectedFeeds.indexOf(feedTitle), 1);
    this.setState(
      {
        selectedFeedCount : this.state.selectedFeedCount - 1
      }
  );
    console.log(this);
  }

  addingFeedTitleToSelectedFeedsArray = (feed) => {
    this.selectedFeeds.push(feed);
    this.setState(
    {
      selectedFeedCount : this.state.selectedFeedCount + 1
    }
  );
    console.log(this);
  }

  deleteFeedAction = () => {
      var self = this;
      if(this.selectedFeeds.length > 0){
        axios.post(`http://localhost:4000${self.props.match.url}`,{
            data : self.selectedFeeds
        }
      ).then(function(response){
        console.log("delete post sent");
      });
      
      // let currentFeedList = this.state.feeds;
      // let newFeedList = [];
      // let len = this.state.selectedFeedCount;
      // for(let i = 0; i < len; i++){
      //   // currentFeedList.splice(currentFeedList.indexOf(self.selectedFeeds[i].id), 1);
      //   console.log(currentFeedList.indexOf(self.selectedFeeds[i].id));
      // }
      // newFeedList = currentFeedList;
      // this.selectedFeeds = [];
      // this.setState(
      //   {
      //     feeds : newFeedList
      //   }
      // );
      
    }
  }

    render(){
      var UserActionDisplay = !(this.state.selectedFeedCount) || false;
      return(
        <div className="App">
          <div className="stat"/>
          <UserActions UserActionDisplay = { UserActionDisplay } selectedCount = { this.state.selectedFeedCount } selectedFeed = { this.selectedFeeds } deleteFeedAction = { this.deleteFeedAction }/>
          <div className='flex-container'>
              {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value} addingFeedTitleToSelectedFeedsArray = { this.addingFeedTitleToSelectedFeedsArray } removingFeedTitleFromSelectedFeedsArray = { this.removingFeedTitleFromSelectedFeedsArray }/>))}   
          </div>  
        </div>
      );
    }
  
}


export default App;
