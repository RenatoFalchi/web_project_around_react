export default function Popup(props) {
    const {onClose, title, children} = props;

    return(
        <div className="popup">
            <div className={`popup__container ${!title ? "photoFrame__container" : ""}`}>
                <button
                    type="button"
                    id="closeButton"
                    className="popup__close-button"
                    onClick={onClose}
                >
                </button>
                {title && <h2 className="popup__container-title">{title}</h2>}
                {children}
            </div>
      </div>
    );
}