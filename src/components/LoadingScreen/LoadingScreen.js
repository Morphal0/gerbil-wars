import React, { useState, useEffect } from "react";
import { Game } from "../../GameEngine";
import "./LoadingScreen.css";

const TITLE = "GERBIL WARS";
const SUBTITLE = "It wants to cuddle, they want to hustle... ";

export default function LoadingScreen({ setGameStatus }) {
  // States for controlling the display of title and subtitle
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Timed visual effects and transition to the next screen
  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 100);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1800);
    const fadeAwayTimer = setTimeout(() => {
      setShowTitle(false);
      setShowSubtitle(false);
    }, 3500);
    const appLoadedTimer = setTimeout(
      () => setGameStatus(Game.status.WELCOME),
      5000
    );

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(fadeAwayTimer);
      clearTimeout(appLoadedTimer);
    };
  }, []);

  return (
    <div className="Loading-screen">
      <h1
        style={{
          opacity: showTitle ? 1 : 0,
        }}
      >
        {TITLE}
      </h1>
      <h2
        style={{
          opacity: showSubtitle ? 1 : 0,
        }}
      >
        {SUBTITLE}
      </h2>
    </div>
  );
}
