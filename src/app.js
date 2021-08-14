import { Route, Switch } from "react-router-dom";
import CountryScreen from "./screens/Country";
import HomeScreen from "./screens/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/country/:countryCode" component={CountryScreen} />
    </Switch>
  );
}

export default App;
