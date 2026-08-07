export default function Popup(props) {
    const {title, children} = props;

    return(
        <div className="popup">
            <div className="popup__container">
                <button
                    type="button"
                    id="closeButton"
                    className="popup__close-button"
                >
                </button>
                <h2 className="popup__container-title">{title}</h2>
                {children}
            </div>
      </div>
    );
}