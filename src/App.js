import logo from './logo.svg';
import './App.css';
import {XPage} from './components/XPage';
import { XMLPage } from './components/XMLPage';
import { BrowserRouter as Router, Route} from 'react-router-dom'

export default function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='reactContainer'>
        <Router>
          <Route exact path="/xwiki/bin/view/:space/:page">
            <h1><XMLPage title='title'/></h1>
            <i><XMLPage title='author'/></i>
            <XPage />
          </Route>
          <Route exact path="/xwiki/bin/view/:space/">
            <XPage />
          </Route>
          <Route exact path="/xml/:space/:page">
            <XMLPage />
          </Route>
        </Router>
      </div>
    </div>
  );
}
