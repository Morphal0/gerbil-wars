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
  const [gameStatus, setGameStatus] = useState(Game.status.LOADING);
  console.log("gameStatus = ", gameStatus);
  if (gameStatus === Game.status.LOADING) {
    console.log("App loading...");
    return (
      <div className="App">
        <LoadingScreen setGameStatus={setGameStatus} />
      </div>
    );
  } else {
    console.log("App loaded");

    if (gameStatus === Game.status.WELCOME) {
      return (
        <div className="App">
          <Header />
          <div className="App-content themed-background">
            <WelcomeScreen setGameStatus={setGameStatus} />
          </div>
          <Footer />
        </div>
      );
    } else if (gameStatus === Game.status.PLAYING) {
      return (
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <div className="App-content themed-background">
            <p>Unknown game state: {gameStatus}</p>
            <button onClick={() => window.location.reload()}>Reload</button>
          </div>
          <Footer />
        </div>
      );
    }
  }
}
export default App;
