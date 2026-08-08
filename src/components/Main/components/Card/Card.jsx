export default function Card(props) {

    const {name, link, isLiked } = props.card;
    const {onClick, card} = props;
    

    return(
        <div className="card">
          <img className="card__image" src={link} alt={name} onClick={() => onClick(card)} />
          <h2 className="card__text">{name}</h2>
          <button 
            type="button"
            className="card__like-button"
            /> 
          <button 
            type="button"
            className="card__delete-button"
            />       
        </div>
    )
}