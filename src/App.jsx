import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import { movies } from './data/movies.js'

function App() {
  const featured = movies[0]

  return (
    <>
      <Header />
      <main>
        <Hero movie={featured} />
      </main>
      <Footer />
    </>
  )
}

export default App
