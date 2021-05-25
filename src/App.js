import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage}/>
        {/* <Route path="/shop/hats" component={HatsPage} /> */}

      </Switch>
    </div>
  );
}

export default App;
