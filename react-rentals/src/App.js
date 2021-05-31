import { Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
