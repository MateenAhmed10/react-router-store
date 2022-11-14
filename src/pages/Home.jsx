import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className="home__container max__container">
        <div className="home__content">
          <h1>Welcome to my store</h1>
          <h2>Check our <Link className='link'>Products</Link></h2>
        </div>
      </div>
    </div>
  );
}

export default Home;