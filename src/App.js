// TODO: implement button to submit search
// TODO: implement next 10 button for if search is out of items, go to next 50
// TODO-possible: add tooltip to warn about making another API call with next10 over 50
// TODO: show error for API limit
// TODO: implement cache to show previous searches even after API limit reached
//       |_> may have to list these or store search history to make less API calls
// TODO: show 3 random gifs before searching
// TODO-styling: Make Cards work correctly in Grid
// TODO-styling: add some color


import React, { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import './App.css'

const GIF_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`

// use React functional components
const App = () => {
  const [input, setInput] = useState("")
  const [results, setResults] = useState([])
  const inputRef = useRef()

  // use debounce to not call API on every key stroke
  // use useRef to persist same ref object on every render
  // results will show 1 second after user ends typing
  useEffect(() => {
    inputRef.current = _.debounce(fetchData, 1000)

  }, []) // empty array so that this only runs once per render


  // set input to current value in search bar and then set inputRef to the same
  const handleChange = (event) => {
    const input = event.target.value
    setInput(input)
    inputRef.current(input)
  }

  // fetch search terms asynchronously
  const fetchData = async (input) => {
    const res = await fetch(`${GIF_URL}&q=${input}`)
    const json = await res.json()

    setResults(json.data)
  }


  return (
    <div className="App">
      <div className="App-header">
        <p>
          Search <a href="https://giphy.com/">GIPHY</a>
        </p>
      </div>
      <div className="Container">
        <div className="InputContainer">
          <input type="text" 
                  id="search" 
                  name="search" 
                  placeholder="Search..." 
                  value={input}
                  onChange={handleChange}
                  className="SearchBar" 
                  required />
        </div>
        <Search results={results} />
      </div>
    </div>
  )
}

// Search component to abstract away the results display from the main class
const Search = ({ results }) => {
  const [number, setNumber] = useState(0)

  if (results.length === 0) return <div>Please enter a search</div>

  return (
    <div className="ResultsContainer">
      <ul className="Grid">
        {results.slice(number, number+10).map(result => (
          <li key={result.id} className="Card">
            <video autoplay="autoplay" loop="loop" >
              <source src={result.images.fixed_height.mp4} type="video/mp4" />
            </video>
            <button onClick={() => {navigator.clipboard.writeText(result.url)}}>
              Click here to copy GIPHY url
            </button>
          </li>
          )
        )}
      </ul>
      <div className="ButtonContainer">
        {number >= 10 ? <button className="Button" onClick={() => setNumber(number - 10)}>Previous 10 results</button> : ''}
        {number < 40 ? <button className="Button" onClick={() => setNumber(number + 10)}>Next 10 results</button> : ''}
      </div>
    </div>
  )
}

export default App