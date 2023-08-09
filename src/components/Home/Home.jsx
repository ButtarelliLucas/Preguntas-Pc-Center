import React from 'react';
import logoI from '../../assets/logo.png';

const Home = () => {
  return (
    <div>
        <div>
            <img src={logoI} className="logo-container"alt="logo" />
        </div>
        <h2>
             Pagina en estado más alpha que beta.
        </h2>
    </div>
  );
};

export default Home;
