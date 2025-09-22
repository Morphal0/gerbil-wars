import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const TITLE = "GERBIL WARS";
const SUBTITLE = "It wants to cuddle, they want to hustle... ";

export default function LoadingScreen({ setAppLoaded }) {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 100);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1800);
    const fadeAwayTimer = setTimeout(() => {
      setShowTitle(false);
      setShowSubtitle(false);
    }, 3500);
    const appLoadedTimer = setTimeout(() => setAppLoaded(true), 5000);
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
