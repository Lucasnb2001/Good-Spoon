/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import { useState, React } from 'react';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line func-names
const Create = function () {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { title, body, likes: 0 };

    fetch('http://localhost:8000/recipes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default Create;
