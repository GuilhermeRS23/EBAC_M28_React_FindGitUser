import './App.css'
import Form from './components/Form';
import Perfil from './components/Perfil';

const App = () => {
  return (
    <>
      <Perfil nome="Guilherme Rosa" avatar="https://github.com/guilhermers23.png" />
      <Form />
    </>
  )
}

export default App;
