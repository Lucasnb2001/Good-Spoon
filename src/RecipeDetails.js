/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */
import { React, useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import useFetch from './useFetch';

const RecipeDetais = function () {
  const [contLikes, setCont] = useState(0);
  const [canUpdate, setCanUpdate] = useState(false);
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch('http://localhost:8000/recipes/' + id);
  const history = useHistory();

  useEffect(() => {
    const dataHora = new Date();
    console.log(dataHora.toLocaleString(), ' ', recipe);
    // eslint-disable-next-line no-prototype-builtins
    if (recipe.hasOwnProperty('likes')) {
      setCont(recipe.likes);
    }
  }, [recipe]);

  const handleClick = () => {
    fetch('http://localhost:8000/recipes/' + recipe.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  useEffect(() => {
    const obj = { title: recipe.title, body: recipe.body, likes: contLikes };
    if (canUpdate) {
      fetch('http://localhost:8000/recipes/' + recipe.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
      });
      setCanUpdate(false);
    }
  }, [contLikes, recipe, canUpdate]);

  const handleLike = () => {
    setCont(contLikes + 1);
    setCanUpdate(true);
  };

  const handleDislike = () => {
    setCont(contLikes - 1);
    setCanUpdate(true);
  };

  return (
    <div className="recipe-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { recipe && (
        <article>
          <h2>{ recipe.title }</h2>
          <p>Likes: {contLikes}</p>
          <div>{ recipe.body }</div>
          <Link to={`/edit/${recipe.id}`}><button type="button">edit</button></Link>
          <button type="button" onClick={handleClick}>delete</button>
          <button type="button" onClick={handleLike}>like</button>
          <button type="button" onClick={handleDislike}>dislike</button>
        </article>
      )}
    </div>
  );
};

export default RecipeDetais;
