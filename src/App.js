import logo from './logo.svg';
import './App.css';
import {XPage} from './components/XPage';
import { XMLPage } from './components/XMLPage';
import { BrowserRouter as Router, Route, useLocation} from 'react-router-dom'
import usePathGen from './components/usePathGen';

export default function App() {
  const location = useLocation();
  const gpath = usePathGen('/xwiki/rest/wikis/xwiki/',['Sandbox','space1','space2'],'WebHome',true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='reactContainer'>
        <Router>
          <Route >
            <XPage location={`${location.pathname}`} />
          </Route>
          <Route exact path="/xml/:space/:page">
            <p>This is xml</p>
            <XMLPage xmlLocation={gpath}/>
          </Route>
        </Router>
      </div>
    </div>
  );
}
