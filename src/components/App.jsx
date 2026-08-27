import { useState, useEffect } from 'react'
import api from '../utils/api.jsx'
import { currentUserContext } from '../contexts/CurrentUserContext.jsx'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'

function App() {

  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup){
      setPopup(popup);
    }
  
    function handleClosePopup(){
      setPopup(null);
    }

  const [currentUser, setCurrentUser] = useState({});
  
  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.updateUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => console.log(err));
    })();
  };
  
  const handleUpdateAvatar = (data) => {
    api.updateAvatar(data).then((newData)=>{
      setCurrentUser(newData);
      handleClosePopup();
    })
    .catch((err) => console.log(err));
  };

  return (
    
    <currentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
    <div className="page">
          <Header/>
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
            />
          <Footer/>
          
    </div>
    </currentUserContext.Provider>
  )
}

export default App
