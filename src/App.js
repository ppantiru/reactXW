import logo from './logo.svg';
import './App.css';
import {XPage} from './components/XPage';
import { BrowserRouter as Router, Route} from 'react-router-dom'

export default function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{width: '100%'}}>
          <Router>
            <Route exact path="/bin/view/:space/:page">
              <XPage />
            </Route>
            <Route exact path="/bin/view/:space/">
              <XPage />
            </Route>
          </Router>
        </div>
      </header>
    </div>
  );
}
