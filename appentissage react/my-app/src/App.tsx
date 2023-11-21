import './App.css';
import { ListGames } from './features/games/components/ListGames';
import { Header } from './shared/components/Header';

function App() {
  return ( // toujours besoin d'une balise parente, d'où le <>
    <> 
      <Header></Header>
      <ListGames></ListGames>
    </>
  );
}

export default App;
