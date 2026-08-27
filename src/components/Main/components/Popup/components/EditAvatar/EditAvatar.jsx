import { useRef, useContext } from "react";
import { currentUserContext } from "../../../../../../contexts/CurrentUserContext";

export default function EditAvatar () {

  const avatarLinkRef = useRef();
  const userContext = useContext(currentUserContext);
  const { handleUpdateAvatar } = userContext;

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({
      link: avatarLinkRef.current.value,
    });
  }

  return(
      <form className="popup__form" id="avatarForm" name="editAvatarForm" noValidate onSubmit={handleSubmit} >
          <fieldset className="popup__form-fieldsetProfile">
            <div className="popup__form-fieldsetBox">
              <input
                className="popup__form-fieldsetInput"
                type="url"
                placeholder="Link de imagem"
                id="avatarLink"
                maxLength="2047"
                required
                name="avatarLink"
                ref={avatarLinkRef}
              />
              <span className="popup__form-error" id="avatarLink-error"></span>
            </div>
          </fieldset>
          <button type="submit" className="popup__save-button">Salvar</button>
        </form>
  );
}