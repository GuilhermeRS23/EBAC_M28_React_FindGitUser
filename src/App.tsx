import { useState } from 'react';
import './App.css'
import Form from './components/Form';
import Perfil from './components/Perfil';

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Perfil nome="Guilherme Rosa" avatar="https://github.com/guilhermers23.png" />
      {visible && <Form />}
      <button onClick={() => setVisible(!visible)}>{!visible ? "Mostrar" : "Ocultar"} Form</button>
    </>
  )
}

export default App;
