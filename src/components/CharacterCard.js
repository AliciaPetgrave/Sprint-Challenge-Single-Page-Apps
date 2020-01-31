import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
    <p>{props.name}</p>
    <img src={props.photo}/>
    </div>
  );
}
