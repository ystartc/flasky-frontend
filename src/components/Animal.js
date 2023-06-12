import './Animal.css';

const Animal = () => {
  const bunny =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9cYz9vU0ZFJbBNUXImW455e-CLYNhXlBrQ&usqp=CAU';

  return (
    <section className='animal'>
      <h2>Animal Name: Fluffy</h2>
      <p>Species: Bunny</p>
      <img src={bunny}></img>
    </section>
  );
};

export default Animal;
