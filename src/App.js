import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Register from "./Pages/Register";
import EmailModal from "./Pages/Login/EmailModal";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Router history={history}>
      <div className="ui container grid">
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/forgot" exact component={Forgot}></Route>
          <Route path="/emailModal" exact component={EmailModal}></Route>
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
