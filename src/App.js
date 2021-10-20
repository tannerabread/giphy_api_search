import React, { useState } from 'react'
import Search from './components/Search'
import './App.css'


const App = () => {
  const [searchData, setSearchData] = useState("")

  const handleChange = (event) => {
    setSearchData(event.target.value)
  }

// change layout to not include header/body
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
                  value={searchData}
                  onChange={handleChange}
                  size="60" required />
        </div>
        <Search searchTerm={searchData} />
      </div>
    </div>
  )
}

export default App