import React, {Component} from 'react';
import Header from '../header/App';
import Router from './router'


class App extends Component {
    render(){
        return(
            <div className='App'>
            <Header/>
            <Router/>
            {/* <Categories/> */}
            {/* <Feeds /> */}
            </div>
        )
    }
}


export default App;