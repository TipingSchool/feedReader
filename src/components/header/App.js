import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';


class App extends Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <header className="App-header">
            <nav>
              <span className='nav-span'><Link to='/'>Home</Link></span>
              <span className='nav-span'><Link to='/feeds'>Feeds</Link></span>
              <span className='nav-span'>Login</span>
              <input type='text' placeholder ='search'/>
            </nav>
          </header>
        )
    }

}


export default App;