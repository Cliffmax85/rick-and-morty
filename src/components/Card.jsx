export default function Card({ name, image, species, status }) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={`image of ${name}`}/>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
        </div>
    )
}