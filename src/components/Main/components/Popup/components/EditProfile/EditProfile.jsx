import { useState, useContext } from "react";
import { currentUserContext } from "../../../../../../contexts/CurrentUserContext";


export default function EditProfile () {
  const userContext = useContext(currentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
  };

    return(
        <form className="popup__form" id="editForm" name="editProfileForm" noValidate onSubmit={handleSubmit} >
            <fieldset className="popup__form-fieldset">
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="text"
                  placeholder="Nome"
                  id="name"
                  minLength="2"
                  maxLength="40"
                  required
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                />
                <span className="popup__form-error" id="name-error"></span>
              </div>
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="text"
                  placeholder="Sobre Mim"
                  id="about"
                  minLength="2"
                  maxLength="200"
                  required
                  name="about"
                  value={description}
                  onChange={handleDescriptionChange}
                />
                <span className="popup__form-error" id="about-error"></span>
              </div>
            </fieldset>
            <button type="submit" className="popup__save-button">Salvar</button>
          </form>
    );
}