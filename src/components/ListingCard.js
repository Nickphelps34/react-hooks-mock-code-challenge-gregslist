import React from "react";


function ListingCard(props) {
  
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={props.image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button  className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{props.description}</strong>
        <span> · {props.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
