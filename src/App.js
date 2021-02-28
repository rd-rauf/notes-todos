import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/header';
import Content from './components/content/content';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Content />
        </div>
      </Router>
    );
  }
}

export default App;
