import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

const navbar_style = {
    textDecoration : 'none',
    color : 'white'
};

class App extends Component{

    
    render(){
        return(
            <header className="App-header">
            <nav>
              <span className='nav-span'><Link to='/' style={ navbar_style }>Home</Link></span>
              <span className='nav-span'><Link to='/feeds' style={ navbar_style }>Feeds</Link></span>
              <span className='nav-span'>Login</span>
              <input type='text' placeholder ='search'/>
            </nav>
          </header>
        );
    }
}


export default App;