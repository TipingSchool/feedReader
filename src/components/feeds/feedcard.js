import React, { Component } from 'react';
import './App.css';
import node1 from '../Categories/node1.png'

const FeedCard = (props) => (
    <div>
        <div className='feed-card-box'>
          <div className='img-card col-md-2'>
             <img className='feed-card-img' src={node1} alt='try'/>
           </div>
           <div className='discription-box col-md-10'>
            <p className='heading'> {props.title}</p>
            <div>
              <author> {props.creator}</author>
            <date>{new Date(props.date).toDateString()}</date>
            </div>
            <div className='discription'>{props.description.substring(0,150)+'...'} </div>
             </div>
        </div>
    </div>
)


export default FeedCard;