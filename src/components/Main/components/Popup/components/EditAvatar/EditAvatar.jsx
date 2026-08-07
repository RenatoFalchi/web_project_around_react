export default function EditAvatar () {
    return(
        <form className="popup__form" id="avatarForm" name="editAvatarForm" noValidate>
            <fieldset className="popup__form-fieldsetProfile">
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="url"
                  placeholder="Link de imagem"
                  id="avatarLink"
                  maxlength="2047"
                  required
                  name="avatarLink"
                />
                <span className="popup__form-error" id="avatarLink-error"></span>
              </div>
            </fieldset>
            <button type="submit" className="popup__save-button">Salvar</button>
          </form>
    );
}