
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { Routes,Route } from 'react-router-dom';

import React,{useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null)
     },2000)
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#355f9d'
      showAlert("Enable Dark Mode","success")
      document.title="Textutils-DarkMode"
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Enable Light Mode","success")
      document.title="Textutils-LightMode"
    }
  }
  return (
   <>
  
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3"> 
               <Routes>
               <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>
                 </Route>
                 <Route exact path="/about" element={<About/>}>
                 </Route>
               </Routes>
            </div>
          
   </>
  );
}

export default App;
