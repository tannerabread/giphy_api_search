import { useParams } from 'react-router-dom'

export default function PreviousSearch() {
  let previousSearch = useParams().previousSearch
  
  return(
    <div>
      <h2 className="searchHeader">Search: {previousSearch}</h2>
      {/* Results */}
    </div>
  )
}