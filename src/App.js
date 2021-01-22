import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {CheckoutProvider} from './components/CheckoutContext'
import Header from './components/Header'
import Checkout from './components/Checkout'
import Search from './components/Search'

function App() {
  return (
    <CheckoutProvider>
      <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
              <Route exact path='/' component={Search} />
              <Route path='/checkout' component={Checkout} />
          </Switch>      
      </Router>
    </CheckoutProvider>
  );
}


export default App;