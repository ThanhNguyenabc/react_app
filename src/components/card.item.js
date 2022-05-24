import React from "react";
import { Link } from "react-router-dom";
import "./card.item.css";

export default function CardItem(props) {
  const { path, src, text, label } = props;
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={path}>
          <div className="img-container">
            <img src={src} alt={label} className="cards-item-img" />
            <h1 className="text-des">{label}</h1>
          </div>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
