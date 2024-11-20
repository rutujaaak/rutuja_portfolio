import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">Rutuja's Portfolio</div>
        <div className="right">
          <ul>
            <li><a href="Home" target="_blank" rel="noopener noreferrer">Home</a></li>
            <li><a href="About" target="_blank" rel="noopener noreferrer">About</a></li>
            <li><a href="project" target="_blank" rel="noopener noreferrer">Projects</a></li>
            <li><a href="contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;