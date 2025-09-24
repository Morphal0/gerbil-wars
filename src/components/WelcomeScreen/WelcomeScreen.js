import React, { useState } from "react";
import { Game } from "../../GameEngine";
import "./WelcomeScreen.css";

const WelcomeScreen = ({
  setGameStatus,
  musicVolume,
  setMusicVolume,
  sfxVolume,
  setSfxVolume,
}) => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className="WelcomeBackground">
      <div className="WelcomeCard">
        <h1 className="GameTitle">Gerbil Wars</h1>
        <button
          className="WelcomeButton"
          onClick={() => {
            setGameStatus(Game.status.PLAYING);
          }}
        >
          Start New Game
        </button>

        <div className="WelcomeSliderContainer">
          <label htmlFor="music-volume" className="WelcomeLabel">
            Music Volume
          </label>
          <input
            id="music-volume"
            type="range"
            min={0}
            max={100}
            value={musicVolume}
            onChange={(e) => setMusicVolume(Number(e.target.value))}
            className="WelcomeSlider"
          />
        </div>

        <div className="WelcomeSliderContainer">
          <label htmlFor="sfx-volume" className="WelcomeLabel">
            SFX Volume
          </label>
          <input
            id="sfx-volume"
            type="range"
            min={0}
            max={100}
            value={sfxVolume}
            onChange={(e) => setSfxVolume(Number(e.target.value))}
            className="WelcomeSlider"
          />
        </div>

        <button className="WelcomeButton" onClick={() => setShowCredits(true)}>
          Credits
        </button>
      </div>

      {showCredits && (
        <div
          className="WelcomeCreditsOverlay"
          onClick={() => setShowCredits(false)}
        >
          <div className="CreditsBox" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: "1rem" }}>Credits</h2>
            <p>
              Gerbil Wars by <a href="http://jean.czerny.fr">Jean Czerny</a>
            </p>
            <button
              className="CreditsCloseButton"
              onClick={() => setShowCredits(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;
