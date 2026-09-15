import { useState } from "react";

export default function NewCard(props) {

  const { onAddPlaceSubmit } = props;

  const [placeTitle, setPlaceTitle] = useState("");
  const [placeImage, setPlaceImage] = useState("");

  const handleNewTitle = (event) => {
    setPlaceTitle(event.target.value);
  };

  const handleNewImage = (event) => {
    setPlaceImage(event.target.value);
  };

    function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: placeTitle,
      link: placeImage,
    });
    setPlaceTitle("");
    setPlaceImage("");
  }

    return(
        <form className="popup__form" id="addForm" name="addCardForm" noValidate onSubmit={handleSubmit} >
            <fieldset className="popup__form-fieldset">
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="text"
                  placeholder="Título"
                  id="placeTitle"
                  minLength="2"
                  maxLength="30"
                  required
                  name="placeTitle"
                  value={placeTitle}
                  onChange={handleNewTitle}
                />
                <span className="popup__form-error" id="placeTitle-error"></span>
              </div>
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="url"
                  placeholder="Link de imagem"
                  id="placeImage"
                  maxLength="2047"
                  required
                  name="placeImage"
                  value={placeImage}
                  onChange={handleNewImage}
                />
                <span className="popup__form-error" id="placeImage-error"></span>
              </div>
            </fieldset>
            <button type="submit" className="popup__save-button">Criar</button>
          </form>
    );
}