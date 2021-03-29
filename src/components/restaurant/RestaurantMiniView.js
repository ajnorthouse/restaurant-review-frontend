export default function RestaurantMiniView(props) {
    /* Structure I'm envisonioning:
        - container
        - Title
        - average Review
        - Address
        - link to their full page? */
    return (
        <div> 
            <h2>{props.title}</h2>
            <p>{props.cuisine}</p>
            <p>{props.avg_rating}</p>
            <p>{props.address}</p>
            <button>Link to Full Page</button>
        </div>
    )
}