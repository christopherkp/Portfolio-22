import Navbar from "./Header";
import Home from "./Home";
import "./shared/css/App.css";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div class="app">
      <Navbar />

      <div class="body">
        <Home />
      </div>
    </div>
  );
}

export default App;
