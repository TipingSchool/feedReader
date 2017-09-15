import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Categories from '../categories/App';
import Feeds from '../feeds/App';

const App = () =>(
    <main>
        <Switch>
        <Route path='/feeds' component={Feeds}/>
        <Route path='/' component={Categories}/>
            
        </Switch>
       
    </main>
)

export default App;