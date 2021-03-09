import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Register from "./Pages/Register";
import EmailModal from "./Pages/Login/EmailModal";
import Profle from "./Pages/Profile";

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
              <Route path="/emailModal" component={EmailModal}></Route>
            </Switch>
          </div>
        </div>

        {/* Dentro de la app */}
        <Switch>
          <Route path="/profile" component={Profle} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
