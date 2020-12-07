
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';



function App() {
  return (
    <>
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top"/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/experience' exact component={Experience} />
        <Route path='/contact-me' exact component={Contact} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/resume' exact component={Resume} />
        {/* the line below allows porgram to redirect to an external link if it starts with '/http'  */}
        <Route path={['/http:', '/https:']} component={props => {
          window.location.replace(props.location.pathname.substr(1)) // substr(1) removes the preceding '/'
          return null
          }}/>
        
      </Switch>
    </Router>
   </>
  );
}

export default App;
