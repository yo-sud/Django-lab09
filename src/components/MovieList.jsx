function MovieList({ movies }) {
  return (
    <section className="movie-list">
      <div className="container">
        <h2 className="section-title">Cartelera</h2>
        <ul className="movie-list__grid" role="list" aria-label="Películas en cartelera">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-list__item">
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MovieList
