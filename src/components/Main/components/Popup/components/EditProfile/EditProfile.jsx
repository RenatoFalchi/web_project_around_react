export default function EditProfile () {
    return(
        <form id="editForm" className="popup__form">
            <fieldset className="popup__form-fieldset">
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="text"
                  placeholder="Nome"
                  id="name"
                  minlength="2"
                  maxlength="40"
                  required
                  name="name"
                />
                <span className="popup__form-error" id="name-error"></span>
              </div>
              <div className="popup__form-fieldsetBox">
                <input
                  className="popup__form-fieldsetInput"
                  type="text"
                  placeholder="Sobre Mim"
                  id="about"
                  minlength="2"
                  maxlength="200"
                  required
                  name="about"
                />
                <span className="popup__form-error" id="about-error"></span>
              </div>
            </fieldset>
            <button type="submit" className="popup__save-button">Salvar</button>
          </form>
    );
}