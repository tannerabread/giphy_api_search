import { useState, useEffect } from 'react'
import './Search.css'

const GIF_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`

const Search = ({ searchTerm }) => {
  const [results, setResults] = useState([])
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      // fetch search terms
      const res = await fetch(`${GIF_URL}&q=${searchTerm}`)
      const json = await res.json()

      setResults(json.data)
    }

    fetchData()
  }, [searchTerm])


  if (!searchTerm) return <div>Please enter a search term</div>

  // change button to copy image
  // put each of these within it's own container
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

export default Search