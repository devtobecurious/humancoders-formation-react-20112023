import { Alert } from 'react-bootstrap'
import './App.css'
import { ListPeople } from './features/people/components/ListPeople'
import { Header } from './shared/ui/components/Header'

function App() {
  const popin = <Alert key='default' variant='warning'>Youpi</Alert>
  let displayPopin = false;

  const displayComponent = () => {
    displayPopin = !displayPopin;
  }

  return (
    <>
      <Header></Header>
      { displayPopin && popin }
      <h1>Ma bibliothèque Star wars</h1>
      <ListPeople displayPopin={displayComponent}></ListPeople>
    </>
  )
}

export default App
