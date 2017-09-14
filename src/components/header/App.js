import React, { Component } from 'react';
import './App.css';


class App extends Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <div className="App-header">
            <nav>
              <span className='nav-span'>Home</span>
              <span className='nav-span'>Feeds</span>
              <span className='nav-span'>Login</span>
              <input type='text' placeholder ='search'/>
            </nav>
          </div>
        )
    }

}


export default App;