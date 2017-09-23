import React, { Component } from 'react';
import './App.css';
import Modal from './modal/modal';
import node1 from '../Categories/node1.png'

const checkboxStyle = {
  float : "right",
  marginLeft: "30px",
  marginTop : "60px",
  fontSize : "15px"
};

class FeedCard extends Component{    
  constructor(props){
    super(props);
      this.state = {
        title : this.props.title,
        isModalOpen: false
      }
    }
    openModal = () => {
      this.setState({isModalOpen:!(this.state.isModalOpen)});
    }
    
    closeModal = () =>{
      this.setState({isModalOpen:!(this.state.isModalOpen)});
    }

    selectFunction = () => {
      
    } 

  render(){ 
    return(
    <div>
        <div className='feed-card-box' onClick={this.openModal}>
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
            <div >
           
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