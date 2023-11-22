import { Alert } from 'react-bootstrap'
import './App.css'
import { ListPeople } from './features/people/components/ListPeople'
import { Header } from './shared/ui/components/Header'
import { useState } from 'react'
import { AddFilm } from './features/films/components/AddFilm'

function App() {
  const popin = <Alert key='default' variant='warning'>Youpi</Alert>
  const [afficherAlerte, setAfficherAlerte] = useState(false);

  const displayComponent = () => {
    // displayPopin = !displayPopin;
    setAfficherAlerte(! afficherAlerte); // ça demande à rafraichir donc réexécute, la fonction en cours, et tous les enfants !!
  }

  return (
    <>
      <Header></Header>
      { afficherAlerte && popin }
      <h1>Ma bibliothèque Star wars</h1>
      {/* <ListPeople displayPopin={displayComponent}></ListPeople> */}
      <AddFilm></AddFilm>
    </>
  )
}

export default App
