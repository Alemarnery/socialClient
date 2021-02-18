import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Login from "./components/auth/Login";
import Forgot from "./components/auth/Forgot";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <Router history={history}>
      <div className="ui container">
        <div className="ui middle aligned two column centered grid">
          <div className="ui card column">
            <Switch>
              <Route path="/signin" component={Login}></Route>
              <Route path="/forgot" component={Forgot}></Route>
              <Route path="/register" component={Register}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
