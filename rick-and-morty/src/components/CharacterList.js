import Character from "./Character"


const CharacterList = ({characters}) => {
    // debugger
    const characterComponentsList = characters.map( char => 
        <Character key={char.id} {...char} />)

    
   
    return (
        <div className="CharactersList">
            <ul className="Characters">
                {characterComponentsList}
            </ul>
        </div>
    )
    }

 export default CharacterList;