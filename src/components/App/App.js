import React, {Component} from 'react';
import Header from '../header/App';
import Categories from '../categories/App'
import Feeds from '../feeds/App'

class App extends Component {
    render(){
        return(
            <div className='App'>
            <Header/>
            <Categories/>
            <Feeds />
            </div>
        )
    }
}


export default App;