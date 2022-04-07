import './App.css';
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#C3E5AE'
  }, [])
  
  const toggleMode = () => {
    // console.log("toggle mode");
    if (mode === 'light') {
      setMode('dark')
      setBtnText('Disable dark Mode');
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = '#0c303e'
    } else {
      setMode('light')
      setBtnText('Enable dark Mode')
      showAlert("Dark mode has been disabled", "success")
      document.body.style.backgroundColor = '#C3E5AE'
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
      <main className="container ">
        <ProductList mode={mode} showAlert={showAlert} />
      </main>
      <Footer mode={mode} />
    </>
  );
}

export default App;
