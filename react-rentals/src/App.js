import { Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { createBrowserHistory } from "history";
import ScrollToTop from "./ScrollToTop";
import { WavyContainer } from "react-wavy-transitions";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <WavyContainer />
      <Router history={history}>
        <ScrollToTop>
          <Navbar />
          <Content />
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

// Force reload when mobile
// orientation changes
window.screen.orientation.addEventListener("change", function (e) {
  window.location.reload(false);
});

export default App;
