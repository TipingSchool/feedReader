import React, { Component } from 'react';
import './App.css';
import html from '../Categories/html.jpg'
import node1 from '../Categories/node1.png'
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      feeds:[]}
  }
  componentDidMount(){
     var self = this;
    if(this.props.match.params.name === 'NodeJS'){
   axios.get('http://localhost:4000/nodejs').then(function(response){
       self.setState({feeds:response.data})
   }).catch(function (error){
     console.log(error)
   })
  }
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
               <date>{props.date}</date>
               </div>
               <div className='discription'>{props.description.substring(0,150)+'...'} </div>
                </div>
           </div>
       </div>
   )



export default App;
