import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import './App.css'
import { AppRoutes } from './AppRoutes'
import { Header } from './shared/ui/components/Header'

function App() {
  const popin = <Alert key='default' variant='warning'>Youpi</Alert>
  // const [afficherAlerte, setAfficherAlerte] = useState(false);
  const [afficherAlerte] = useState(false);

  // const displayComponent = () => {
  //   // displayPopin = !displayPopin;
  //   setAfficherAlerte(! afficherAlerte); // ça demande à rafraichir donc réexécute, la fonction en cours, et tous les enfants !!
  // }

  return (
    <>
      <Header></Header>
      { afficherAlerte && popin }
      <h1>Ma bibliothèque Star wars</h1>
      {/* <ListPeople displayPopin={displayComponent}></ListPeople> */}
      {/* <AddFilm></AddFilm> */}
      <AppRoutes></AppRoutes>
    </>
  )
}

export default App
