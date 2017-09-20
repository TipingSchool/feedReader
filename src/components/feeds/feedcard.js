import React, { Component } from 'react';
import './App.css';
import node1 from '../Categories/node1.png'

const side_panel = {
  float : "right",
  marginLeft: "10px",
  marginTop : "60px",
  fontSize : "15px",
  transform : "scale(1.2)"
}

const checkbox_text = {
  paddingBottom : "5px",
  marginBottom : "10px"
};

const FeedCard = (props) => (
    <div>
        <div className='feed-card-box'>
          <div className='img-card col-md-2'>
            <img className='feed-card-img' src={ node1 } alt='try'/>
          </div>
          <div className='description-box col-md-10'>
            <p className='heading'> { props.title }</p>
            <div>
              <author> { props.creator }</author>
              <date>{ new Date(props.date).toDateString() }</date>
            </div>
            <div className='description'>
              { props.description.substring(0,150) + '...' }
            </div>
          </div>
        </div>
        <div style = { side_panel }>
            <input type = "checkbox" name = "select_feed"/><span style = { checkbox_text }></span><br/>
        </div>
    </div>
);


export default FeedCard;