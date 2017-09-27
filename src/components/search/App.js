import React, {Component} from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './App.css';


class App extends Component{
    constructor(props){
          super(props);
          this.state={
              query:'Search'
          }

    }
    
    UpdateSearch = (event) =>{
           this.setState({query:event.target.value.substr(0,30)})
    }

    handleSubmit = (event) =>{
        // this.props.history.push(`/search?keywords=${this.state.query}`)
        if(event.key === 'Enter'){
            this.props.history.push(`/search?keywords=${this.state.query}`)
        }
    }

    handleClick = () =>{
            this.props.history.push(`/search?keywords=${this.state.query}`)
    } 

     render(){
         return(
             <form className='nav-span' >
                <input type='text'
                 value={this.state.search}
                 onChange={this.UpdateSearch}
                 onKeyPress={this.handleSubmit}
                  />
                <FaSearch className='search-icon' onClick={this.handleClick} />
             </form>
         )
     }
}


export default withRouter(App);