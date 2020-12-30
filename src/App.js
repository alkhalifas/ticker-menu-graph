import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./Fake/Login";
import {Home} from "./Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Route
              path="/tickers"
              exact component={Home}/>
          <Route
              path="/"
              exact component={Home}/>
          <Route
              path= "/tickers/:tickerId"
              exact component={Home}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
