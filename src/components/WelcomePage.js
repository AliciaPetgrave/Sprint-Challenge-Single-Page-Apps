import React from "react";
import styled from "styled-components"

const Welcome = styled.section`
text-align:center;
`

export default function WelcomePage() {
  return (
    <Welcome className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </Welcome>
  );
}
