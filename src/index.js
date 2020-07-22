import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Header, List } from "semantic-ui-react";
import './App.css';
import Car from './App.js';
import ResultComponent from './calculatecomponent/ResultComponent';
import KeyPadComponent from "./calculatecomponent/KeyPadComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          </Switch>

      </div>
    </Router>
  );
}

function Menu() {
  return (
    <nav>
      <ul>
        <li class="l1">
          <Link to="/about">Words To Numbers</Link>
        </li>
        <li class="l2">
          <Link to="/users">Numbers To Words</Link>
        </li>
      </ul>
    </nav>

  );
}

function Home() {
      return   
  <Container>
      <List bulleted>
      </List>
        <div class="ui inverted segment">
          <h1>Geometry Calculator</h1>
           <div class="ui inverted pointing secondary menu">
           </div>
        </div>
  </Container>
  } 

function About() {
      return   
      <Container>
    <List bulleted>
    </List>
<div class="ui inverted segment">
  <h1>Geometry Calculator</h1>
  <div class="ui inverted pointing secondary menu">
  </div>
</div>
<p>adasdasdadasd</p>
  </Container>
  } 


function Users() { 
      return <Container>
    <List bulleted>
    </List>
<div class="ui inverted segment">
  <h1>Geometry Calculator</h1>
  <div class="ui inverted pointing secondary menu">
  </div>
</div>
  <p>xcvxcvxcv</p>
  <ResultComponent result={this.state.result}/>
  <KeyPadComponent onClick={this.onClick}/>
  </Container>
  } 

// main.js
const root = document.querySelector('root');
ReactDOM.render(<App />, root);
