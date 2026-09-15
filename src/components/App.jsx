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
///////////////////////////////////////////////////////////////
  const [cards, setCards] = useState([]);
  
    useEffect(()=>{
      api.getInitialCards()
        .then((data)=>{
          setCards(data);
        })
        .catch((err)=>{
          console.log(err);
        });
    },[]);
  
    async function handleCardLike(card) {
      const isLiked = card.isLiked;
  
      await api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      })
        .catch((error) => console.log(error));
    }
  
    async function handleCardDelete (card) {
      await api.deleteCard(card._id)
        .then(()=>{
          setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
        })
        .catch((error) => console.log(error));
    }
///////////////////////////////////////////////////////////////
  return (
    
    <currentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
    <div className="page">
          <Header/>
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            />
          <Footer/>
          
    </div>
    </currentUserContext.Provider>
  )
}

export default App
