import { NavLink, Outlet } from 'react-router-dom'

export default function Translates() {
  let types = ['gifs', 'stickers']
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {types.map(type => (
          <NavLink
            style={({ isActive }) => {
              return { 
                display: "block", 
                margin: "1rem 0",
                color: isActive ? "rgba(242,182,182,1)" : "rgba(114,99,166,1)",
                backgroundColor: isActive ? "rgba(114,99,166,1)" : "rgba(47,35,89,1)"
              }
            }}
            to={`/translate/${type}`}
            key={type}
          >{type}</NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}