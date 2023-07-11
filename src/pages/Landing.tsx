import React from 'react';
import { Parallax } from 'react-parallax';
import './Landing.css';

const App = () => {
  return (
    <div className="App">
        <header>
      <Parallax bgImage="../../public/images.svg" strength={500}>
        <div style={{ height: 500, color:'red' }}>
          <h1>Título de tu landing</h1>
        </div>
      </Parallax>
    </header>

    <section>
      <div style={{ height: 1000 }}>
        <h2>Contenido de la landing</h2>
      </div>
    </section>


      <Parallax
        bgImage="../../public/san juan.svg"
        strength={500}
      >
        <div className="parallax-container">
          <h1>Welcome to My Landing Page</h1>
        </div>
      </Parallax>

      <div className="content">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Parallax
        bgImage="../../public/ometepe.svg"
        strength={900}
      >
        <div className="parallax-container">
          <h2>Features</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Parallax>

      <div className="content">
        <h2>Contact</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

    </div>
  );
};

export default App;
