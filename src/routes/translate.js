import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getTranslateGifs, getTranslateStickers } from '../utilities/getData'
import TranslateResults from '../components/TranslateResults'

export default function Translate() {
  let type = useParams().type
  let [searchParams, setSearchParams] = useSearchParams()
  // const [data, setData] = useState()
  // const [error, setError] = useState()

  console.log('searchParams', searchParams)
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const res = await getTranslateGifs(searchParams)
  //       setData(res)
  //     } catch(error) {
  //       console.error('Unable to fetch data', error)
  //       setError(error)
  //     }
  //   }

  //   getData()
  // }, [searchParams])

  return (
    <div>
      <h2>Translate {type.toUpperCase()}</h2>
      <input
        value={searchParams.get("filter") || ""}
        onChange={event => {
          let filter = event.target.value
          if (filter) {
            setSearchParams({ filter })
          } else {
            setSearchParams({})
          }
        }}
      />
      {/* <TranslateResults searchParams={searchParams} type={type} /> */}
    </div>
  )
}