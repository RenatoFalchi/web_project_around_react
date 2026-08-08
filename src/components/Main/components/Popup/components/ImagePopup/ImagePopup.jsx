export default function ImagePopup (props) {

    const {name, link} = props.card;

    return(
        <>
          <img src={link} className="photoFrame__image" alt="" />
          <h2 className="photoFrame__text">{name}</h2>
        </>
    )
}