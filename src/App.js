import './App.css';
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const toggleMode = () => {
    // console.log("toggle mode");
    if (mode == 'light') {
      setMode('dark')
      setBtnText('Disable dark Mode');
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = '#042743'
    } else {
      setMode('light')
      setBtnText('Enable dark Mode')
      showAlert("Dark mode has been disabled", "success")
      document.body.style.backgroundColor = 'white'
    }
  }
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode} btnText={btnText} />
      <Alert alert={alert} />
      <main className="container my-5">
        <ProductList mode={mode} showAlert={showAlert} />
      </main>
    </>
  );
}

export default App;
