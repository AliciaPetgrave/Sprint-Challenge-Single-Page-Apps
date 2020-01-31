import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage"
import {Route} from "react-router-dom"
import styled from "styled-components"

const Main = styled.main`
background:#15b6b8;
`
export default function App() {
  return (
    <Main>
      <Header />
      <CharacterList/>
      {/* <Route exact path="/" component={WelcomePage}/> */}
      <Route path="/characters" component={CharacterList}/>
    </Main>
  );
}
