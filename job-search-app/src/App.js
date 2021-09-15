import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavJobs from "../src/Components/Navbar.jsx"
import SearchJobs from "../src/Components/Search-Bar.jsx"
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div style={{height: "100vh"}}>
      <NavJobs/>
      <BrowserRouter>
        <Switch>
            <Route exact path="/Search" component={SearchJobs}/>
            <Route exact path="/">
              <Redirect to="/Search"/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
