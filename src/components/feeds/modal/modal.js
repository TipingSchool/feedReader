import React, { Component } from 'react';
import './modal.css';
import node1 from './node1.png'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
         isModalOpen: false
    }
  }

  openModal(){
    this.setState({isModalOpen:true})
    console.log(this.props.value.title)
  }

  closeModal(){
    this.setState({isModalOpen:false})
  }

  render(){
    var self = this;
    return (
      <div>
          <button onClick={() => this.openModal()}> Open Me </button>
          <Modal  isOpen={this.state.isModalOpen} onClose={() =>this.closeModal()}  child = {this.props.value}/>
      </div>
  )
  }

}

class Modal extends Component{
  close(e){
    e.preventDefault()
      if(this.props.onClose){
        this.props.onClose()
      }

  }
   render(){
     if(this.props.isOpen === false){
       return null
     }

     let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      borderRadius:'5px',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }


     let backdropStyle ={
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9000',
      background: 'rgba(0, 0, 0, 0.5)'
     }

     return(
       <div>
         <div style={modalStyle}>
         <p className='close'><button onClick={() => this.props.onClose()}>close</button></p>
            <div className='modal-img'>
              <img className='' src={node1} alt='try'/>
            </div>
            <div className=''>
              <p className='modal-title'> {this.props.child.title}</p>
              
              <div className='modal-author'>
                <p> {this.props.child.creator}</p>
                <p>{new Date(this.props.child.date).toDateString()}</p>
              </div>
              <div className='modal-description'>{this.props.child.description} </div>
              <div  ><a className='modal-link' href={this.props.child.link} target='#'>Visit Website</a> </div>
            </div>
         </div>
         <div style={backdropStyle} onClick={e =>this.close(e)}/>
       </div>
     )
   }
}


export default App;