export default function RemoveCard ({card}) {
    return(
        <button 
            type="submit"
            className="popup__delete-button"
            onClick={()=>onConfirm(card)}
        >
            Sim
        </button>
    )
}