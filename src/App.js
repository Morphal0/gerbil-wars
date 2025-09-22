import { useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Game } from "./GameEngine";

var game = new Game();
const time = game.timeForward();

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  if (!appLoaded) {
    console.log("App loading...");
    return (
      <div className="App">
        <LoadingScreen setAppLoaded={setAppLoaded} />
      </div>
    );
  } else {
    console.log("App loaded");
    return (
      <div className="App">
        <Header />
        <div className="App-content themed-background">
          <WelcomeScreen />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
