import { useState, useEffect } from 'react'
import api from '../utils/api.jsx'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'

function App() {

  const [currentUser, setCurrentUser] = useState();

  useEffect(()=>{
    api.getUserInfo()
      .then((data)=>{
        setCurrentUser(data);
      })
      .catch((err)=>{
        console.log(err);
      });
  },[]);
  
  return (
    
    <div className="page">
          <Header/>
          <Main></Main>
          <Footer/>
          
    </div>
    
  )
}

export default App
