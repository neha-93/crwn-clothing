import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage}/>
        {/* <Route path="/shop/hats" component={HatsPage} /> */}

      </Switch>
    </div>
  );
}

export default App;
