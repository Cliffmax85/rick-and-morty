export default function Card({ character }) {
    return (
        <div>
            <h3>{character.name}</h3>
            <img src={character.image} alt={`image of ${character.name}`}/>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
        </div>
    )
}