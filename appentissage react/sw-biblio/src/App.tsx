import './App.css'
import { ListPeople } from './features/people/components/ListPeople'
import { Header } from './shared/ui/components/Header'

function App() {
  return (
    <>
      <Header></Header>
      <h1>Ma bibliothèque Star wars</h1>
      <ListPeople></ListPeople>
    </>
  )
}

export default App
