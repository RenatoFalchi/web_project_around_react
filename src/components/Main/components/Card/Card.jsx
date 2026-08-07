export default function Card(props) {

    const {name, link, isLiked } = props.card;

    return(
        <div className="card">
          <img className="card__image" src={link} alt="" />
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