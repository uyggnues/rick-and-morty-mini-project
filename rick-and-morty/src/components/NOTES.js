// // Deliverables Breakdown

// // GET Fetch all the items

//     // 0: Where do we add the useEffect hook?
//     // 1: import useEffect -> import {useEffect} from 'react'
//     // 1b: make sure you also import useState and create a state variable for the collection
//     // 2: How do we use it?
//     useEffect(() => {
//         const fetchData = () => {
//             fetch("URL HERE - usually pluralized endpoints here")
//             .then(resp => resp.json())
//             .then(data => setData(data)) // make sure you add a useState hook and reference the setter function from that line here (e.g. setData will be setBooks or setPlants)
//             .catch(err => alert(err))
//         }

//         fetchData()
//         }, [])
//     // 3: Is there a component in charge of displaying the items? If so, pass the collection as a prop to that component
//         return (
//             <DataList data={data} />
//         )
//     //4:DataList will have to map the collection and render a ItemCard component for each item object in the collection
//         const itemsComponentsList = data.map(item => <ItemCard {...item} key={item.id} />)
//     //5: interpolate the variable inside the return statement (interpolation in JSX means only {})
//         return (
//             <div>{itemsComponentsList}</div>
//         )


// // Search Feature (aka filter functionality - dropdown AND/OR search input)
//     //0: Do we have a Filter component? If so, where is it rendered?
//     //1: Add state. Where? Usually in the parent of Filter to make sure we are actually able to filter the collection. If the collection is not in the parent but the grandparent, the state should go there!
//     //2: Pass down the state variable and the state function to the Filter component.
//     //3: Destructure the newly received props inside the Filter component.
//     //4: Where do we use them now? (rememeber we deal with CONTROLLED inputs - aka set a value and an onChange properties on the input/select tag)

//     // Option 1: the input is on its own, not inside a form tag
//     const Filter = ({query, setQueryChar}) => {
//         const handleChange = (e) => {
//             setQueryChar(e.target.value.toLowerCase())
//         }

//         return (
//             <div className="Search">
//                 <input 
//                     value={query}
//                     onChange={handleChange}
//                     className="search-input"
//                     placeholder='Search by name'
//                 />
//             </div>
//     )
//     }

//     // Option 2: the input is inside a form tag -> you have to use submit event listener
//     const Filter = ({setQueryChar}) => {
//         const [term, searchTerm] = useState("")

//         const handleSubmit = (e) => {
//             setQueryChar(term)
//         }
//         const handleChange = (e) => {
//             searchTerm(e.target.value.toLowerCase())
//         }

//         return (
//             <form className="Search" onSubmit={handleSubmit}>
//                 <input 
//                     value={term} // YOU NEED TO HAVE value property
//                     onChange={handleChange} // YOU NEED TO HAVE onChange property
//                     className="search-input"
//                     placeholder='Search by name'
//                 />
//             </form>
//     )
//     }

//     // Summary for Case #1: The use types something into the input box. The onChange listenes to that and modifies state to store what was typed. State changed -> the component re-renders. The new value for the searchTerm is then passed down to the FIlter component again. The input value property will now point to the new value.


// // Add a form to create a new item
//     //0: Do we have a form? If so, lucky you! If not, go create a new component, and add the form inside!
//         // we need to do something on submit events -> onSubmit handleSubmit
//         // EVERY input needs to have a name, value, and onChange property
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name</label>
//             <input type="text" name="name" value={newItem.name} onChange={handleChange} />
//             <label htmlFor="age">Age</label>
//             <input type="text" name="age" value={newItem.age} onChange={handleChange} />
//             <input type="submit" value="Create" />
//         </form>
//     //1: create a state variable, probably it should be an object! Why? Isn't the data we're trying to create an object? Think of the properties it should have (aka all your inputs) and create a basic empty object
//         const [newItem, setNewItem] = useState({
//             name: "",
//             age: ""
//         })
//     //2: the handleChange will leverage the name property on each input to dynamically update the correct key/value inside the state object
//         const handleChange = ({target: {name, value}}) => { //"Name", "testw"
//             // const {name, value} = e.target
//             setNewItem({...newItem, [name]: value}) // you WILL HAVE TO REPLACE THE NAMES OF THE STATE VARIABLE AND STATE FUNCTION FOR THE CHALLENGE
//         }

//     //3: Go inside the parent where the state variable for the whole collection has been defined. Render inside that component the ItemForm and pass the state function down as prop
//     return (
//         <div>
//             <ItemForm setData={setData}/>
//             <DataList data={data} />
//         </div>
//     )

//     //4: Go inside the ItemForm component and destructure the new prop -> TIME TO USE IT! We need to create a handleSubmit that will do a few things!
    
//     const handleSubmit = (e) => {
//         //step 0: prevent the default behavior
//         e.preventDefault() 
        
//         //step 1: let the json server know about the new addition with a POST fetch request
//         fetch("http://localhost:3000/YOUR-ENDPOINT-HERE-PLURALIZED", { // GET and POST fetch calls go to the same endpoint!!!!!!!!!!!
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newItem) // newItem DOES NOT have an id property
//         })
//         //step 3 let the local state know about the new addition using setCharacters
//         .then(res => res.json())
//         .then(newData => setData(currentListOfItems => [...currentListOfItems, newData]))

//         setNewItem({
//             name: "",
//             age: ""
//         })
//     }

// // Preview of PATCH and DELETE FETCH call structures
//     // DELETE requests are fired after a click on a delete button
//     //1: Add a delete button inside each ItemCard and give it a text of "Delete" or "X"
//     //2: attach a click listener that invokes a handleClick callback on click
//     //3: create the handleClick callback:

//     const handleClick = e => {
//         fetch(`http://localhost:3000/items/${id}`, { // GET and POST fetch calls go to the same endpoint!!!!!!!!!!!
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         //step 3 let the local state know about the new addition using setCharacters
//         // go through the list of items inide the array and filter/collect/pluck into the final array ONLY the items whose id DOES NOT MATCH the id of the item we just deleted with the DELETE fetch call
//         .then(() => setData((currentItems) => currentItems.filter(item => item.id !== id)))
//     }