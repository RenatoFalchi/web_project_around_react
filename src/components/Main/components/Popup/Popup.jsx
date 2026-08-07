export default function Popup(props) {
    const {title, children} = props;

    return(
        <section className="popup popupedit">
        <div className="popup__container">
          <button
            type="button"
            id="closeEditButton"
            className="popup__close-button popup__close-headerButton"
          >
            <img
              src="./images/Popup_Close-Icon.png"
              className="popup__close-icon"
              alt="Botão de fechar"
            />
          </button>
          <h2 className="popup__container-title">{title}</h2>
          {children}
        </div>
      </section>
    );
}