import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Categories from './routes/categories'
import RandomGifs from './routes/randomgifs'
import TrendingGifs from './routes/trendinggifs'
import SearchGifs from './routes/searchgifs'
import SearchGif from './routes/searchgif'
import RandomStickers from './routes/randomstickers'
import TrendingStickers from './routes/trendingstickers'
import SearchStickers from './routes/searchstickers'
import SearchSticker from './routes/searchsticker'
import Autocompletes from './routes/autocompletes'
import Autocomplete from './routes/autocomplete'
import PreviousSearches from './routes/previoussearches'
import PreviousSearch from './routes/previoussearch'
import Translates from './routes/translates'
import Translate from './routes/translate'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="categories" element={<Categories />} />
        <Route path="randomGifs" element={<RandomGifs />} />
        <Route path="trendingGifs" element={<TrendingGifs />} />
        <Route path="searchGifs" element={<SearchGifs />}>
          <Route path=":searchQuery" element={<SearchGif />} />
        </Route>
        <Route path="randomStickers" element={<RandomStickers />} />
        <Route path="trendingStickers" element={<TrendingStickers />} />
        <Route path="searchStickers" element={<SearchStickers />}>
          <Route path=":searchQuery" element={<SearchSticker />} />
        </Route>
        <Route path="autocomplete" element={<Autocompletes />}>
          <Route path=":searchQuery" element={<Autocomplete />} />
        </Route>
        <Route path="translate" element={<Translates />}>
          <Route path=":type" element={<Translate />} />
        </Route>
        <Route path="previousSearches" element={<PreviousSearches />}>
          <Route path=":previousSearch" element={<PreviousSearch />} />
        </Route>
        <Route path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)