import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import SearchGifs from './routes/searchgifs'
import SearchStickers from './routes/searchstickers'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/searchGifs" element={<SearchGifs />} />
        <Route path="/searchStickers" element={<SearchStickers />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)