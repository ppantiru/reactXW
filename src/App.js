import logo from './logo.svg';
import './App.css';
import {XPage} from './components/XPage';
import { XMLPage } from './components/XMLPage';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import usePathGen from './components/usePathGen';

export default function App() {
  const gpath = usePathGen('/xwiki/bin/view/',['Sandbox','space1','space2'],'WebHome',false);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='reactContainer'>
        <Router>
          <Route exact path="/xwiki/bin/view/:space/:page">
            <h1><XMLPage title='title'/></h1>
            <XPage />
            <p>{gpath}</p>
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
