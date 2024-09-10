function Header() {
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <nav>
        <ul className="top-nav" aria-label="Main Navigation" role="navigation">
          <li>
            <a href="#womens">Women's</a>
          </li>
          <li>
            <a href="#mens">Men's</a>
          </li>
          <li>
            <a href="#street">On the Street</a>
          </li>
          <li>
            <a href="#catwalk">The Catwalk</a>
          </li>
          <li>
            <a href="#adwatch">AdWatch</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;