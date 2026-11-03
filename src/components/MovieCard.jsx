function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="movie-card__poster">
        <img src={movie.image} alt={`Poster de ${movie.title}`} />
        <span className="movie-card__classification">{movie.classification}</span>
      </div>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <div className="movie-card__rating">
          <span aria-hidden="true">★</span> {movie.rating}
        </div>
        <div className="movie-card__schedules">
          <strong>Horarios:</strong>
          <ul className="movie-card__times">
            {movie.schedule.map((time) => (
              <li key={time}>{time}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
