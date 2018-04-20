import React from "react";
import "./CharacterCard.css";

// Character card component
const CharacterCard = props => (
  <div onClick={() => props.clickCard(props)} className="card col-3 col-md-4 m-2">
    <img className="card-img-top" src={props.image} alt={props.name}/>
    <h3 className="text-center">{props.description}</h3>
  </div>
  
);

export default CharacterCard;
