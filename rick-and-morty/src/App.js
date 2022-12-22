// import './App.css';
// import React from "react"
import CharacterList from "./components/CharacterList"
// import characters from "./data/characters"
import SearchForm from "./components/SearchForm"
import React, {useState, useEffect} from "react"
import CharacterForm from './components/CharacterForm'
// import Character from "./components/Character
function App() {

  // hooks
  //fetch
  //local variable
  // return 
  const [queryChar, setQueryChar] = useState("")
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const resp = await fetch(`http://localhost:3000/characters`)
        const characterList = await resp.json()
        setCharacters(characterList)
      } catch(error){
        alert(error)
      }
  }
    fetchData()
  }, [])
  
  const filteredChar = characters.filter(character => character.name.toLowerCase().includes(queryChar.toLowerCase()))
  return (
    <div className="App">
      <SearchForm queryChar={queryChar} setQueryChar={setQueryChar} />
      <CharacterForm setCharacters={setCharacters}/>
      <CharacterList characters={filteredChar}/>
    </div>
  );
}

export default App;

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const resp = await fetch(`http://localhost:3000/characters`, {
    //         method: "POST",
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name: "Matteo", species: "Weird alien teacher", })
    //       })
    //       const newCharacter = await resp.json()
    //       setCharacters(currentCharacters => [...currentCharacters, newCharacter])
    //     } catch (error) {
    //       alert(error)
    //     }
    //   }
  
    //   fetchData()
    // }, [])