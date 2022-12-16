// import './App.css';
// import React from "react"
import CharacterList from "./components/CharacterList"
import characters from "./data/characters"
import SearchForm from "./components/SearchForm"
import React, {useState} from "react"
// import Character from "./components/Character
function App() {

  const [queryChar, setQueryChar] = useState("")

  const filteredChar = characters.filter(character => character.name.toLowerCase().includes(queryChar.toLowerCase()))
  return (
    <div className="App">
      <SearchForm queryChar={queryChar} setQueryChar={setQueryChar} />
      <CharacterList characters={filteredChar}/>
    </div>
  );
}

export default App;
