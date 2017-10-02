import React, { Component } from 'react';
import './App.css';
import UserActions from "./User_actions";
import FeedCard from './feedcard';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feeds:[]
    }
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

  
  deleteFeedAction = (feedIndexNumber, feedObjectId) => {
      var self = this;
        axios.post(`http://localhost:4000${self.props.match.url}`,{
            feedObjectId :  feedObjectId,
            action : "delete"
        }
      ).then(function(response){
        console.log("delete post sent");
      });

      let currentFeed = this.state.feeds;
      currentFeed.splice(feedIndexNumber, 1);
      this.setState({
        feeds : currentFeed
      });
  }

  archiveFeedAction = (feedIndexNumber, feedObjectId) => {
    var self = this;
    axios.post(`http://localhost:4000${self.props.match.url}`,{
      feedObjectId : feedObjectId,
      action : "archive"
    }).then(function(response){
      console.log("post archived");
    });

    let currentFeed = this.state.feeds;
    currentFeed.splice(feedIndexNumber, 1);
    this.setState({
      feeds : currentFeed
    });
  }

  publishFeedAction = (feedIndexNumber, feedObjectId) => {
    var self = this;
    axios.post(`http://localhost:4000${self.props.match.url}`,{
      feedObjectId : feedObjectId,
      action : "publish"
    }).then(function(response){
      console.log("post published");
    });

    let currentFeed = this.state.feeds;
    currentFeed.splice(feedIndexNumber, 1);
    this.setState({
      feeds : currentFeed
    });
  }

    render(){
      return(
        <div className="App">
          <div className="stat"/>
          <div className='flex-container'>
              {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value} indexNumber = {i} deleteFeedAction = { this.deleteFeedAction } archiveFeedAction = { this.archiveFeedAction } publishFeedAction = { this.publishFeedAction }/>))}   
          </div>  
        </div>
      );
    }
}
  
export default App;
