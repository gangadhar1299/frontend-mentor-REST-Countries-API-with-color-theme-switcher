import { Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      {/* <Route path="/:id" component={() => {}} /> */}
    </Switch>
  );
}

export default App;
