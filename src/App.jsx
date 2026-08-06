import { useState } from 'react'
import logo from './images/Header-Around_The_Us_Logo.png'
import imageAvatar from './images/Content-Avatar_Jacques.png'
import imageButtonAvatar from './images/Content-Profile-EditAvatarButton.png'
import imageButtonEditProfile from './images/Content-Profile-EditButton.png'
import imageButtonAddCard from './images/Content-Profile-AddButton.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="page">
          <header className="header">
            <div className="header__box">
              <img
                src={logo}
                className="header__logo"
                alt="Around The US logotype"
              />
            </div>
          </header>
          <main className="content">
            <section className="profile">
              <div className="profile__avatar-container">
                <img
                  src={imageAvatar}
                  className="profile__avatar"
                  alt="Foto de perfil"
                />
                <button type="button" className="profile__avatar-button">
                  <img
                    src={imageButtonAvatar}
                    className="profile__avatar-button-icon"
                    alt="Editar foto de perfil"
                  />
                </button>
              </div>
              <div className="profile__info">
                <h1 className="profile__info-name">Jacques Cousteau</h1>
                <button type="button" className="profile__editButton">
                  <img
                    src={imageButtonEditProfile}
                    className="profile__editButton-image"
                    alt="Editar Profile"
                  />
                </button>
                <h2 className="profile__info-about">Explorer</h2>
              </div>
              <button type="button" className="profile__addButton">
                <img
                  src={imageButtonAddCard}
                  className="profile__addButton-image"
                  alt="Adicionar Imagem"
                />
              </button>
            </section>

            <section className="gallery">
              <div className="gallery__grid"></div>
            </section>
          </main>
          <footer className="footer">
            <p className="footer__copyright">
              &#169; 2026. Renato Falchi Correia de Oliveira
            </p>
          </footer>
          
          
        </div>
    
  )
}

export default App
