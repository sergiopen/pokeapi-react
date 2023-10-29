import './styles/App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';
import Home from './components/Home';
import PokemonInfo from './components/PokemonInfo';
import Item from './components/Item';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokemon' element={<Pokemon />}/>
        <Route path='/pokemon/:pokemons' element={<PokemonInfo />}/>
        <Route path='/type/:types'></Route>
        <Route path='*' element={<h1>404: Error</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
