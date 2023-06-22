import React, { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_FORM_DATA = {
  name: '',
  age: 0,
  species: '',
};

const NewAnimalForm = props => {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(0);
  // const [species, setSpecies] = useState('');
  const [animalFormData, setAnimalFormData] = useState(INITIAL_FORM_DATA);

  const InputChange = event => {
    // if (event.target.name === 'name') setName(event.target.value);
    // else if (event.target.name === 'age') setAge(event.target.value);
    // else if (event.target.name === 'species') setSpecies(event.target.value);
    const newAnimalFormData = {
      ...animalFormData,
      [event.target.name]: event.target.value,
    };
    setAnimalFormData(newAnimalFormData);
  };

  return (
    <section className='animal-form'>
      <h2>Create New Animal</h2>
      <form className='input-form'>
        <label htmlFor='animalName'>Name:</label>
        <input
          id='animalName'
          name='name'
          type='text'
          value={animalFormData.name}
          onChange={InputChange}
        />
        <label htmlFor='animalAge'>Age:</label>
        <input
          id='animalAge'
          name='age'
          type='text'
          value={animalFormData.age}
          onChange={InputChange}
        />
        <label htmlFor='animalSpecies'>Species:</label>
        <input
          id='animalSpecies'
          name='species'
          type='text'
          value={animalFormData.species}
          onChange={InputChange}
        />
      </form>
    </section>
  );
};

NewAnimalForm.propTypes = {};

export default NewAnimalForm;
