import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx'
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile.jsx'
import {BrowserRouter as Router ,  Switch,  Route,  } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>

       <Route exact path="/">
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route> 


        <Route exact path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
