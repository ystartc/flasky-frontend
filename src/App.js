import './App.css';
import Animal from './components/Animal';
import AnimalList from './components/AnimalList';

function App() {
  return (
    <section className='App'>
      <header>The Sapphire Animal Adoption Agency</header>
      <AnimalList />
      <Animal />
      <Animal />
      <Animal />
    </section>
  );
}

export default App;
