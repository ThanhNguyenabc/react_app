import React from "react";
import Button from "./button";
import "./hero.section.css";
import { FiPlayCircle } from "react-icons/fi";
export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn-large"
          buttonStyle="btn-outline"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonSize="btn-large"
          buttonStyle="btn-primary"
        >
          WATCH TRAILERS
          <FiPlayCircle size={18} className="btn-play" />
        </Button>
      </div>
    </div>
  );
}
