import { Router, Route, Switch , Redirect} from "react-router-dom";
import history from "./history";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Register from "./Pages/Register";
import EmailModal from "./Pages/Login/EmailModal";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        {/* Colocarle a estas rutas el container */}
        <Route path="/" exact>
          <Redirect to="/login"/>
        </Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/forgot" exact component={Forgot}></Route>
        <Route path="/emailModal" exact component={EmailModal}></Route>

        {/* 
        A esta NO */}
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
