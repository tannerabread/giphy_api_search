import { useEffect, useState } from 'react'
import { getTranslateGifs, getTranslateStickers } from '../utilities/getData'

export default function TranslateResults({ query, type, weirdness }) {
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    async function getData() {
      try {
        const res = await getTranslateGifs(query)
        console.log('res', res)
        setData(res)
      } catch(error) {
        console.error('Unable to fetch data', error)
        setError(error)
      }
    }

    getData()
  }, [query])

  return(
    <div>
      test
    </div>
  )
}

//  export async function getData({ searchParams, getType, type, weirdness }) {
//   if (type === 'gifs') {
//     return await getTranslateGifs(searchParams)
//   } else {
//     return await getTranslateStickers(searchParams)
//   }
// }