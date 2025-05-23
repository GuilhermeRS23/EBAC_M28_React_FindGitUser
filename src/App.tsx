import { useState } from 'react';
import Form from './components/Form';
import Perfil from './components/Perfil';
import './App.css'
import ReposList from './components/ReposList';

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Perfil nome="Guilherme Rosa" avatar="https://github.com/guilhermers23.png" />
      <ReposList />
      {visible && <Form />}
      <button onClick={() => setVisible(!visible)}>{!visible ? "Mostrar" : "Ocultar"} Form</button>
    </>
  )
}

export default App;
