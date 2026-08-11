import { useState } from 'react'
import imageAvatar from '../../images/Content-Avatar_Jacques.png'
import imageButtonAvatar from '../../images/Content-Profile-EditAvatarButton.png'
import imageButtonEditProfile from '../../images/Content-Profile-EditButton.png'
import imageButtonAddCard from '../../images/Content-Profile-AddButton.png'
import Popup from './components/Popup/Popup.jsx'
import NewCard from './components/Popup/components/NewCard/NewCard.jsx'
import EditProfile from './components/Popup/components/EditProfile/EditProfile.jsx'
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar.jsx'
import Card from './components/Card/Card.jsx'
import ImagePopup from './components/Popup/components/ImagePopup/ImagePopup.jsx'
import RemoveCard from './components/Popup/components/RemoveCard/RemoveCard.jsx'

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];


export default function Main () {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Novo Cartão", children: <NewCard/>}
  const editProfilePopup = {title: "Editar Perfil", children: <EditProfile/>}
  const editAvatarPopup = {title: "Alterar a foto do perfil", children:<EditAvatar/>}
  const removeCardPopup = {title:"Tem Certeza?", children:<RemoveCard/>}

  function onDeleteClick(card){
    const deleteContent = {
      title:"Tem certeza?",
      children:<RemoveCard card={card}/>
    };
    setPopup(deleteContent);
  }

  function onCardClick (card) {
    const imageContent = {
      children: <ImagePopup card={card}/>
    };
    setPopup(imageContent);
  }
  
  function handleOpenPopup(popup){
    
    setPopup(popup);
  }

  function handleClosePopup(){
    setPopup(null);
  }
    return(
        <main className="content">
                    <section className="profile">
                      <div className="profile__avatar-container">
                        <img
                          src={imageAvatar}
                          className="profile__avatar"
                          alt="Foto de perfil"
                        />
                        <button type="button" className="profile__avatar-button" onClick={() => handleOpenPopup(editAvatarPopup)}>
                          <img
                            src={imageButtonAvatar}
                            className="profile__avatar-button-icon"
                            alt="Editar foto de perfil"
                          />
                        </button>
                      </div>
                      <div className="profile__info">
                        <h1 className="profile__info-name">Jacques Cousteau</h1>
                        <button type="button" className="profile__editButton" onClick={() => handleOpenPopup(editProfilePopup)}>
                          <img
                            src={imageButtonEditProfile}
                            className="profile__editButton-image"
                            alt="Editar Profile"
                          />
                        </button>
                        <h2 className="profile__info-about">Explorer</h2>
                      </div>
                      <button type="button" className="profile__addButton" onClick={() => handleOpenPopup(newCardPopup)}>
                        <img
                          src={imageButtonAddCard}
                          className="profile__addButton-image"
                          alt="Adicionar Imagem"
                        />
                      </button>
                    </section>
        
                    <section className="gallery">
                      <div className="gallery__grid">
                        {cards.map((card) => (
                          <Card key={card._id} card={card} onClick={onCardClick} onDeleteClick={onDeleteClick} />
                        ))}
                      </div>
                    </section>
                    {popup && (
                      <Popup onClose={handleClosePopup} title={popup.title}>
                        {popup.children}
                      </Popup>
                    )}
                  </main>
    )
}