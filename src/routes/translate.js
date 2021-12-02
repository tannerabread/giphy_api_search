import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import TranslateResults from '../components/TranslateResults'

export default function Translate() {
  let type = useParams().type
  let [query, setQuery] = useSearchParams()

  return (
    <div>
      <h2>Translate {type.toUpperCase()}</h2>
      <input
        value={query.get("query") || ""}
        onChange={event => {
          let query = event.target.value
          if (query) {
            setQuery({ query })
          } else {
            setQuery({})
          }
        }}
      />
      <TranslateResults query={query.get('query')} type={type} />
    </div>
  )
}