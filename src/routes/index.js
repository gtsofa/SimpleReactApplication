import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import SignUp from '../components/SignUp';
import Header from '../components/Header';
import About from '../components/About';

const AppRoutes = () => {

  return (
    <HashRouter>
        <div>
            <Header/>
        <Switch>
            <div className="container">
                <Route exact path="/" component={App} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/about" component={About}/>
          </div>
        </Switch>
        </div>
    </HashRouter>
    
  );
};
export default AppRoutes;