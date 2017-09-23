import React, { Component } from 'react';
import './App.css';
import Modal from './modal/modal';
import node1 from '../Categories/node1.png'



class FeedCard extends Component{    
  constructor(props){
    super(props);
      this.state = {
        isModalOpen: false,
        feedCardBoxCss : {
          display: "inline-block",
          backgroundColor: "rgba(242, 240, 245, 0.99)",
          width:"600px",
          height: "130px",
          margin: "20px",
          boxSizing: "border-box",
          boxShadow: "4px 5px 6px darkgrey",
          fontSize: "30px",
          fontFamily: "sans-serif",
          fontWeight: "600",
          cursor: "pointer",
          borderLeft : "3px solid white"
        }
      }; 
    
    }
    openModal = () => {
      this.setState({isModalOpen:!(this.state.isModalOpen)});
    }
    
    closeModal = () =>{
      this.setState({isModalOpen:!(this.state.isModalOpen)});
    }

    selectFunction = () => {
      this.props.addingFeedTitleToArray(this.props.title);
      
      this.setState({
        feedCardBoxCss : {
            display: "inline-block",
            backgroundColor: "rgba(242, 240, 245, 0.99)",
            width:"600px",
            height: "130px",
            margin: "20px",
            boxSizing: "border-box",
            boxShadow: "4px 5px 6px darkgrey",
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "600",
            cursor: "pointer",
            borderLeft : "3px solid black"
        }
      });

    } 

  render(){   
    return(
    <div>
        <div style = { this.state.feedCardBoxCss } onClick={this.openModal}>
          <div className='img-card col-md-3'>
            <img className='feed-card-img' src={ node1 } alt='try'/>
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
            <div>
              <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}  child={this.props}/>
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