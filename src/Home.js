/* eslint-disable linebreak-style */
import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = function () {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8500/recipes');
  return (
    <div className="home">
      { error && <div>{error}</div>}
      { isPending && <div>Loading...</div> }
      <BlogList title="Recipes" blogs={blogs} />
    </div>
  );
};

export default Home;
