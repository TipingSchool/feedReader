import React, { Component } from 'react';
import './App.css';
import Modal from './modal/modal';
import node1 from '../Categories/node1.png'

class FeedCard extends Component{
   constructor(props){
     super(props)
     this.state ={
      isModalOpen: false
    }
   }

   openModal = () => {
    this.setState({isModalOpen:!(this.state.isModalOpen)});
    
  }

  closeModal = () =>{
    this.setState({isModalOpen:!(this.state.isModalOpen)});
  }

  render(){ 
    return(
    <div>
        <div className='feed-card-box' onClick={this.openModal}>
          <div className='img-card col-md-2'>
            <img className='feed-card-img' src={ node1 } alt='try'/>
          </div>
          <div className='description-box col-md-10'>
            <p className='heading'> {this.props.title }</p>
            <div>
              <author> {this.props.creator }</author>
              <date>{ new Date(this.props.date).toDateString() }</date>
            </div>
            <div className='description'>
              { this.props.description.substring(0,150) + '...' }
            </div>
            <div >
           
            <Modal   isOpen={this.state.isModalOpen} onClose={this.closeModal}  child={this.props}/>
            </div>
          </div>
        </div>
        <div>
                             
        </div>
    </div>
)
  }
}


export default FeedCard;