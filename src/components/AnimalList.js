import './AnimalList.css';
import Animal from './Animal.js';
import PropTypes from 'prop-types';

const AnimalList = props => {
  // const listOfAnimals = props.animals;
  return (
    <section className='animal-list__list'>
      {props.animals.map(creature => (
        <li key={creature.id}>
          <Animal
            id={creature.id}
            name={creature.name}
            species={creature.species}
            photo={creature.photo}
            age={creature.age}
            bookmark={creature.bookmark}
            updateBookmark={props.updateBookmark}
            deleteAnimal={props.deleteAnimal}
          />
        </li>
      ))}
    </section>
  );
};

AnimalList.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      species: PropTypes.string.isRequired,
      adopted: PropTypes.bool,
      age: PropTypes.number,
      photo: PropTypes.string.isRequired,
    })
  ),
  updateBookmark: PropTypes.func,
  deleteAnimal: PropTypes.func,
};

export default AnimalList;
