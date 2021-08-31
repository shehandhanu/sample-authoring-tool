import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Header from './Components/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' component={Home} exact />
        <Route path='/aboutus' component={AboutUs} exact />
        <Route path='/services' component={Services} exact />
      </div>

    </Router>
  );
}

export default App;
