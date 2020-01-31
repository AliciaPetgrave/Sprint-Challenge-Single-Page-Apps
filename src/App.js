import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage"
import {Route} from "react-router-dom"
import styled from "styled-components"
import SearchForm from "./components/SearchForm"

const Main = styled.main`
background:#15b6b8;
`
export default function App() {
  return (
    <Main>
      <Header />
    
      <Route exact path="/"> <WelcomePage /> </Route>
      <Route path="/CharacterList"> <CharacterList /> </Route>
    </Main>
  );
}
