import Login from "./components/login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./views";
import NotFound from "./components/NotFound";
import HomeCom from "./views/home";
import TestCom from "./components/other/TestCom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <HomeCom />
          </Route>
          <Route path="/test">
            <TestCom />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
