import "./App.css";

// import { BrowserRouter, Route } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Allmeetup from "./Routing/pages/Allmeetup";
import Newmeetup from "./Routing/pages/Newmeetup";
import Favorites from "./Routing/pages/Favorites";
import MainNavigation from "./Routing/components/layout/MainNavigation";

// import Todo from "./components/Todo";

function App() {
  return (
    <div>
      {/* <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Explore React" /> */}
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <Allmeetup />
        </Route>
        <Route path="/Newmeetup">
          <Newmeetup />
        </Route>

        <Route path="/Favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
