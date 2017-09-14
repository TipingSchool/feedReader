import React, { Component } from 'react';
import './App.css';
import html from '../Categories/html.jpg'

class App extends Component{
    render(){
     return(
      <div className="App">
        <div className="App-header">
          <nav>
            <span className='nav-span'>Feeds</span>
            <span className='nav-span'>Login</span>
            <input type='text' placeholder ='search'/>
          </nav>
        </div>
        <div className="stat">
        </div>
        <div className='flex-container'>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
        </div>
        
      </div>
     )
    }

}

class FeedCard extends Component {
render(){
   return(
       <div>
           <div className='card-box'>
             <div className='img-card col-md-4'>
                <img className='card-img' src={html} alt='try'/>
              </div>
              <div className='discription-box col-md-8'>
               <heading> Box Model in HTML</heading>
               <author>By: Suraj Prakash</author>
               <date>22 Aug, 2017</date>
               <p className='discription'>Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                </div>
           </div>
       </div>
   )
}

}

export default App;
