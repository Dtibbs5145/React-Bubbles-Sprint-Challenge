import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BubblePage from './components/BubblePage';
import PrivateRoute from './Auth/PrivateRoute';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/colors'>Colors</Link>
          </li>
        </ul>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path='/colors' component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
