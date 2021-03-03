import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Register from "./Pages/Register";
import emailModal from "./Pages/Login/Modal";

const App = () => {
  return (
    <Router history={history}>
      <div className="ui container">
        <div className="ui middle aligned two column centered grid">
          <div className="ui card column">
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/forgot" component={Forgot}></Route>
              <Route path="/emailModal" component={emailModal}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
