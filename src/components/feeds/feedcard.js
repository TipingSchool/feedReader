import React, { Component } from 'react';
import './App.css';
import Modal from './modal/modal';
import node1 from '../Categories/node1.png'



class FeedCard extends Component{    
  constructor(props){
    super(props);
      this.state = {
        isModalOpen: false,
        feedImageCss : {
          width : "100%",
          height : "130px",
          opacity : "1",
        },
        isFeedSelected : false
      }; 
    
    }
    
    openModal = () => {
      this.setState({isModalOpen:!(this.state.isModalOpen)});
    }
    

    selectFunction = () => {
    
     if(!this.state.isFeedSelected){ 
      this.props.addingFeedTitleToArray(this.props.title);
      this.setState({
        isFeedSelected : !(this.state.isFeedSelected),
        feedImageCss : {
          width : "100%",
          height : "130px",
          opacity : "0.5",
          zIndex : "1"
        }
      });
    }

    else{
      this.props.removingFeedTitleFromArray(this.props.title);
      this.setState(
        {
          isFeedSelected : !(this.state.isFeedSelected),
          feedImageCss : {
            width : "100%",
            height : "130px",
            opacity : "1",
            zIndex : "1"
          }
        }
      );
    }


    } 

  render(){   
    return(
      
    <div>
        <div className = "feed-card-box" onClick={this.openModal}>
          <div className='img-card col-md-3'>
            <img style = { this.state.feedImageCss } src={ node1 } alt='try'/>
          </div>
          <div className='description-box col-md-9'>
            <p className='heading'> {this.props.title }</p>
            <div>
              <author> {this.props.creator.substring(0,20) }</author>
              <date>{ new Date(this.props.date).toDateString() }</date>
            </div>
            <div className='description'>
              { this.props.description.substring(0,150) + '...' }
            </div>
            <div >
           
            <Modal isOpen={this.state.isModalOpen} onClose={this.openModal}  child={this.props}/>
            </div>
          </div>
        </div>
      <div className = "selectButtonDiv">
        <button className = "userSelectButton" onClick = { this.selectFunction }>+</button>
      </div>
    </div>
    );
  }
}


export default FeedCard;