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
      })
      .catch(function (error){
        console.log(error);
      });
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
