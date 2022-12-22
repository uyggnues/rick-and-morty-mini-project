import {useState} from 'react'

function CharacterForm ({setCharacters}) {
    // const [name, setName] = useState("")
    // const [image, setImage] = useState("")
    // const [status, setStatus] = useState("")
    // const [species, setSpecies] = useState("")
    // const [type, setType] = useState("")
    // const [gender, setGender] = useState("")

const [newCharacter, setNewCharacter] = useState({
    name: "",
    status: "", 
    species: "", 
    type: "", 
    gender: "", 
    image: ""
})
const handleChange = ({target: {name, value}}) => {
// debugger
// const{name, value} = e.target
setNewCharacter({...newCharacter, [name]: value})
}

    const handleSubmit = (e) => {
        e.preventDefault()
        // const newCharacter = {name, status, species, type, gender, image}
        // debugger

        fetch('http://localhost:3000/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newCharacter)
        })
        .then(resp => resp.json())
        .then(charObj => setCharacters((charArray) => [...charArray, charObj]))
        // setName('')
        // setImage('')
        // setStatus('')
        // setSpecies('')
        // setType('')
        // setGender('')

        setNewCharacter({
            name: "",
            status: "", 
            species: "", 
            type: "", 
            gender: "", 
            image: ""
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={newCharacter.name} onChange={handleChange} />
                <br />
                <label>Image Url</label>
                <input type="text" name="image" value={newCharacter.image} onChange={handleChange} />
                <br />
                <label>Status</label>
                <input type="text" name="status" value={newCharacter.status} onChange={handleChange} />
                <br />
                <label>Species</label>
                <input type="text" name="species" value={newCharacter.species} onChange={handleChange} />
                <br />
                <label>Type</label>
                <input type="text" name="type" value={newCharacter.type} onChange={handleChange} />
                <br />
                <label>Gender</label>
                <input type="text" name="gender" value={newCharacter.gender} onChange={handleChange} />
                <br />
                <input type="submit" name="create" />
            </form>
        </div>
    )
}
export default CharacterForm