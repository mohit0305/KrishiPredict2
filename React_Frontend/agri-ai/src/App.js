import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CropRecommender from "./components/CropRecommender";
import FertilizerRecommender from "./components/FertilizerRecommender";
import RabiProfit from "./components/RabiProfit";
import KharifProfit from "./components/KharifProfit";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={{
      backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/farm5.jpg'})`
    }} className="container">
      <div class="overlay">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/crop" component={CropRecommender} />

          <Route exact path="/fertilizer" component={FertilizerRecommender} />

          <Route exact path="/profit" component={RabiProfit} />

          <Route exact path="/revenue" component={KharifProfit} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
