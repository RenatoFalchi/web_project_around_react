import { useContext } from 'react'
import { currentUserContext } from '../../contexts/CurrentUserContext.jsx'
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



export default function Main (props) {
  
  const { popup, onOpenPopup, onClosePopup, cards, onCardLike, onCardDelete } = props;

  

  const { currentUser } = useContext(currentUserContext);

  
  const newCardPopup = { title: "Novo Cartão", children: <NewCard/>}
  const editProfilePopup = {title: "Editar Perfil", children: <EditProfile/>}
  const editAvatarPopup = {title: "Alterar a foto do perfil", children:<EditAvatar/>}
  const removeCardPopup = {title:"Tem Certeza?", children:<RemoveCard/>}


  

  function onDeleteClick(card){
    const deleteContent = {
      title:"Tem certeza?",
      children:<RemoveCard card={card}/>
    };
    onOpenPopup(deleteContent);
  }

  function onCardClick (card) {
    const imageContent = {
      children: <ImagePopup card={card}/>
    };
    onOpenPopup(imageContent);
  }
  
  
    return(
        <main className="content">
                    <section className="profile">
                      <div className="profile__avatar-container">
                        <img
                          src={currentUser.avatar}
                          className="profile__avatar"
                          alt="Foto de perfil"
                        />
                        <button type="button" className="profile__avatar-button" onClick={() => onOpenPopup(editAvatarPopup)}>
                          <img
                            src={imageButtonAvatar}
                            className="profile__avatar-button-icon"
                            alt="Editar foto de perfil"
                          />
                        </button>
                      </div>
                      <div className="profile__info">
                        <h1 className="profile__info-name">{currentUser.name}</h1>
                        <button type="button" className="profile__editButton" onClick={() => onOpenPopup(editProfilePopup)}>
                          <img
                            src={imageButtonEditProfile}
                            className="profile__editButton-image"
                            alt="Editar Profile"
                          />
                        </button>
                        <h2 className="profile__info-about">{currentUser.about}</h2>
                      </div>
                      <button type="button" className="profile__addButton" onClick={() => onOpenPopup(newCardPopup)}>
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
                          <Card key={card._id} card={card} onClick={onCardClick} onCardDelete={onCardDelete} onCardLike={onCardLike} />
                        ))}
                      </div>
                    </section>
                    {popup && (
                      <Popup onClose={onClosePopup} title={popup.title}>
                        {popup.children}
                      </Popup>
                    )}
                  </main>
    )
}