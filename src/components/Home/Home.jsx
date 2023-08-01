import React from 'react';
import logoI from '../../assets/logo.png';

const Home = () => {
  return (
    <div>
        <div>
            <img src={logoI} className="logo-container"alt="logo" />
        </div>
        <div>
             Pagina en estado más alpha que beta.
        </div>
    </div>
  );
};

export default Home;
