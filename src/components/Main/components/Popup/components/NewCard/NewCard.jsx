export default function NewCard() {
    return(
        <form id="addForm" className="popup__form">
            <fieldset className="popup__form-fieldset">
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="text"
                  placeholder="Título"
                  id="placeTitle"
                  minlength="2"
                  maxlength="30"
                  required
                  name="placeTitle"
                />
                <span className="popup__form-error" id="placeTitle-error"></span>
              </div>
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="url"
                  placeholder="Link de imagem"
                  id="placeImage"
                  maxlength="2047"
                  required
                  name="placeImage"
                />
                <span className="popup__form-error" id="placeImage-error"></span>
              </div>
            </fieldset>
            <button type="submit" className="popup__save-button">Criar</button>
          </form>
    );
}