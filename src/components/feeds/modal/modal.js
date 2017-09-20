import React, { Component } from 'react';
import './modal.css';
import node1 from './node1.png'


const Modal = (props) => (
    <div>
        <div className='modal-box'>
          <div className='modal-img'>
             <img className='' src={node1} alt='try'/>
           </div>
           <div className=''>
            <p className='modal-title'> {props.title}</p>
            
            <div className='modal-author'>
              <p> {props.creator}</p>
            <p>{new Date(props.date).toDateString()}</p>
            </div>
            <div className='modal-description'>{props.description} </div>
            <div  ><a className='modal-link' href={props.link} target='#'>Visit Website</a> </div>
             </div>
        </div>
    </div>
)


export default Modal;