/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = function (props) {
  const { blogs } = props;
  const { title } = props;
  return (
    <div className="blog-list">
        <h3>{title}</h3>
        {blogs.map((element) => (
        <div className="element-preview" key={element.id}>
        <Link to={`/details/${element.id}`}>
        <h2>{element.title }</h2>
        <p>{element.body}</p>
        <p>Likes: {element.likes}</p>
        </Link>
        </div>
        ))}
    </div>
  );
};

export default BlogList;
