/* eslint-disable linebreak-style */
/* eslint-disable no-prototype-builtins */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */

import { React, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const Update = function () {
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch('http://localhost:8000/recipes/' + id);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();

  useEffect(() => {
    const dataHora = new Date();
    console.log(dataHora.toLocaleString(), ' ', recipe);
    if (recipe.hasOwnProperty('title') && recipe.hasOwnProperty('body')) {
      setTitle(recipe.title);
      setBody(recipe.body);
    }
  }, [recipe]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, body, likes: recipe.likes };

    await fetch('http://localhost:8000/recipes/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className="create">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { (recipe && !error) && (
          <article>
          <div>
          <h2>Edit the Recipe</h2>
            <form onSubmit={handleEdit}>
            <label>Recipe title:</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Recipe body:</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">update Recipe</button>
            </form>
          </div>
          </article>
      )}
    </div>
  );
};

export default Update;
