import React from "react";
import styled from "styled-components"

const Card = styled.div`
margin:20px;
text-align:center;
background:salmon;
height:400px;
width:400px;
border-radius:15px;
`

export default function CharacterCard(props) {
  return (
    <Card>
    <h3>{props.name}</h3>
    <img src={props.photo} alt="character"/>
    </Card>
  );
}
