import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/thank-you" exact component={() => <ThankYou />} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;