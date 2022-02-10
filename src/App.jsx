import Contact from "./components/Contact";
import Root from "./components/Root";
import We from "./components/We";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Civilization from "./components/Civilization";



function App() {
  return (
    <Router>
    <div className='container mt-5'>
        <div className="btn-group mb-3"> 
          <Link to="/" className="btn btn-dark">
            Init
          </Link>
          <Link to="/we" className="btn btn-primary">
            We're
          </Link>
          <Link to="/contact" className="btn btn-secondary" >
            Contact
          </Link>
        </div>

        <Switch>
            <Route path="/civilization/:id">
                <Civilization/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/we">
                <We/>
            </Route>
            <Route path="/">
                <Root/>
            </Route>
        </Switch>
    </div>
</Router>
  );
}

export default App;
