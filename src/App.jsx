import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MovieList from './components/MovieList.jsx'
import Footer from './components/Footer.jsx'
import { movies } from './data/movies.js'

function App() {
  const featured = movies[0]

  return (
    <>
      <Header />
      <main>
        <Hero movie={featured} />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </>
  )
}

export default App
