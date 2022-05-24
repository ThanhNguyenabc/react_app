import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { FaBitcoin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-sub">
        <h2 className="footer-sub-heading">
          Join the Adventure newsletter to receive our best vaction deals
        </h2>
        <h4 className="footer-sub-heading">You can unsubscribe at any time </h4>
        <form className="form-email">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="footer-input"
          />
          <Button buttonStyle="btn-outline"> Subscribe</Button>
        </form>
      </section>

      <div className="footer-links-wrapper">
        <div className="footer-links-items">
          <h2>About Us</h2>
          <Link to="/signup">How it works</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Term of services</Link>
        </div>

        <div className="footer-links-items">
          <h2>Contact Us</h2>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          <Link to="/">Destination</Link>
          <Link to="/">Sponsorship</Link>
        </div>

        <div className="footer-links-items">
          <h2>Videos</h2>
          <Link to="/">Submit Video</Link>
          <Link to="/">Influencer</Link>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-logo">
            <Link className="social-group" to="/">
              TRVL <FaBitcoin />
            </Link>
          </div>

          <small className="website-right">TRVL @ 2022</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to="/">
              <AiFillFacebook />
            </Link>
            <Link className="social-icon-link instagram" to="/">
              <AiFillInstagram />
            </Link>
            <Link className="social-icon-link twitter" to="/">
              <AiFillTwitterCircle />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
