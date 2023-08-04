import { useState } from 'react'
import './App.css'
import quotes from './db/quote.json'
import { getRandom } from './utils/random' // funcion para sacar random
import QuoteBox from './components/QuoteBox'

const listBg = ['App bg bg1', 'App bg bg2', 'App bg bg3', 'App bg bg4']

function App() {

  const [quote, setQuote] = useState(getRandom(quotes))
  const [img, setImg] = useState(getRandom(listBg))

  const handleChange = () => {
    setQuote(getRandom(quotes))
    setImg(getRandom(listBg))
  }

  return (
    <main className={img}>
      <QuoteBox 
      handleChange={handleChange}
      quote={quote}
      />
    </main>
  )
}

export default App
