import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Meals from "./Componets/Meals/Meals";
import NotFound from "./Componets/NotFound/NotFound";
import MealDetails from "./Componets/MealDetails/MealDetails";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Contact from "./Componets/Contact/Contact";
import NavBar from "./Componets/NavBar/NavBar";
import Footer from "./Componets/Footer/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/meal/:id">
          <NavBar></NavBar>
          <MealDetails></MealDetails>
          <Footer></Footer>
        </Route>
        <Route path="/meals">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
          <Footer></Footer>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
          <Footer></Footer>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NavBar></NavBar>
          <NotFound></NotFound>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
