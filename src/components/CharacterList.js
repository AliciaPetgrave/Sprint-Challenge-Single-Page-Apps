import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard"
import Axios from "axios";

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
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
