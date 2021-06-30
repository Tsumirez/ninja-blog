import NavBar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Page404 from "./Page404";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              < BlogDetails/>
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
