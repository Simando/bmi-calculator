import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BmiForm from './components/BmiForm';
import BmiResult from './components/BmiResult';

function App() {
  return (
    <Router>
      <div className="App">
        <Route>
          <Route exact path="/" component={BmiForm} />
          <Route path="/result" component={BmiResult} />
        </Route>
      </div>
    </Router>
  );
}

export default App;