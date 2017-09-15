import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Categories from '../Categories/App';
import Feeds from '../feeds/App';

const App = () =>(
    <div>
        <Switch>
        <Route path='/feeds/:name' component={Feeds}/>
        <Route path='/feeds' component={Feeds}/>
        <Route exact path='/' component={Categories}/>
        <Route render={() => <p>Page not found!</p>} />
        
            
        </Switch>
       
    </div>
)

export default App;