import PropTypes from 'prop-types';
// import { useState } from 'react';
import './Animal.css';

const Animal = props => {
  // const [isBookmarked, setBookmarked] = useState(false);
  // const bookmarkAnimal = () => {
  //   setBookmarked(!isBookmarked);
  //   console.log('We can click on this button');
  // };

  const toggleBookmark = () => {
    props.updateBookmark({ ...props, bookmark: !props.bookmark });
  };

  const toggleDelete = () => {
    props.deleteAnimal(props.id);
  };

  const altText = `Photo of ${props.name}`;

  return (
    <section className={props.bookmark ? 'animal bookmarked' : 'animal'}>
      <div className='ribbon'></div>
      <h2 className='name'>Animal Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Age: {props.age}</p>
      {props.photo ? (
        <img src={props.photo} alt={altText} className='img'></img>
      ) : (
        '[No Photo]'
      )}
      <button onClick={toggleBookmark} className='bookmark-button'>
        Bookmark
      </button>
      {/* <p>Is bookmarked? {props.bookmark ? 'True' : 'False'}</p> */}
      <button onClick={toggleDelete} className='delete-button'>
        Delete
      </button>
    </section>
  );
};

Animal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  species: PropTypes.string.isRequired,
  adopted: PropTypes.bool,
  age: PropTypes.number,
  photo: PropTypes.string.isRequired,
  bookmark: PropTypes.bool,
  updateBookmark: PropTypes.func.isRequired,
  deleteAnimal: PropTypes.func.isRequired,
};

export default Animal;
