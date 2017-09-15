import React, { Component } from 'react';
import './App.css';
import html from '../categories/html.jpg'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      feeds:[{'heading':' Box Model in HTML','author':'Suraj Prakash','date':'22 Aug, 2017',
      'discription':'Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'},
      {'heading':' Box Model in HTML','author':'Suraj Prakash','date':'22 Aug, 2017',
      'discription':'Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'},
      {'heading':' Box Model in HTML','author':'Suraj Prakash','date':'22 Aug, 2017',
      'discription':'Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'},
      {'heading':' Box Model in HTML','author':'Suraj Prakash','date':'22 Aug, 2017',
      'discription':'Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'},
      {'heading':' Box Model in HTML','author':'Suraj Prakash','date':'22 Aug, 2017',
      'discription':'Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'},
      {'heading':' Box Model in HTML','author':'Suraj Prakash','date':'22 Aug, 2017',
      'discription':'Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'},
      {'heading':' Box Model in HTML','author':'Suraj Prakash','date':'22 Aug, 2017',
      'discription':'Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'},
    ]}
  }
    render(){
     return(
      <div className="App">
        <div className="stat">
        </div>
        <div className='flex-container'>
            {this.state.feeds.map((value,i) =>(  <FeedCard key={i} {...value}  />))}
            
        </div>
        
      </div>
     )
    }

}

const FeedCard = (props) => {

   return(
       <div>
           <div className='feed-card-box'>
             <div className='img-card col-md-3'>
                <img className='feed-card-img' src={html} alt='try'/>
              </div>
              <div className='discription-box col-md-9'>
               <heading> {props.heading}</heading>
               <div>
                 <author> {props.author}</author>
               <date>{props.date}</date>
               </div>
               <p className='discription'>{props.discription} </p>
                </div>
           </div>
       </div>
   )
}


export default App;
