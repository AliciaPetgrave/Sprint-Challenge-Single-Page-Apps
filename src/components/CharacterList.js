import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard"
import Axios from "axios";
import {Link} from "react-router-dom"
import styled from "styled-components"

const List = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`

const Head = styled.h2`
text-align:center;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([])

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results)
      setChars(response.data.results)
    })
    .catch(error =>{
      console.log(error)
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <Head>Characters</Head>
    <List>
      {chars.map(character =>{
        return (
          <CharacterCard
          name = {character.name}
          species = {character.species}
          photo = {character.image}/>
        )
      })}
      </List>
    </section>
  );
}
