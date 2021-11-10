import { Link, Outlet } from 'react-router-dom'
import { getHistory } from '../utilities/getData'

export default function PreviousSearches() {
  let searches = getHistory()
  console.log('searches', searches)
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {Object.keys(searches).map(search => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/previousSearches/${search}`}
            key={search}
          >{search}</Link>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}