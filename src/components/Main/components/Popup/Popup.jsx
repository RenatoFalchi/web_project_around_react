export default function Popup(props) {
    const {title, children} = props;

    return(
        <section class="popup popupedit">
        <div class="popup__container">
          <button
            type="button"
            id="closeEditButton"
            class="popup__close-button popup__close-headerButton"
          >
            <img
              src="./images/Popup_Close-Icon.png"
              class="popup__close-icon"
              alt="Botão de fechar"
            />
          </button>
          <h2 class="popup__container-title">{title}</h2>
          {children}
        </div>
      </section>
    )
}