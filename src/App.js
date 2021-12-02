import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/pages/About';
import Resume from './components/pages/Resume';

import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    
    <div>
         <Router>
                <Nav />
                
                
                <Switch>
                    <Route exact path="/react-Portfolio" component={Homepage} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Resume" component={Resume} />
                    
                    <Route exact path="/Contact" component={Contact} />
                   
                   
                    

                 
                </Switch>
                
                <Footer />
            </Router>
    </div>

  );
}

export default App;
