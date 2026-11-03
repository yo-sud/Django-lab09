function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">CINE<span className="logo__accent">PLUS</span></div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="nav__link">Cartelera</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Estrenos</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Próximamente</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
