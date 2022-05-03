import { useState } from "react";




export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchCharacters() {
            const res = fetch('https://rickandmortyapi.com/api/character');
            const { results } = await res.json();
            console.log(results);
            setCharacters(results);
            setLoading(false);
        }
        fetchCharacters();
    }, []);
    return (
        <>
          <h2>Mick & Worty</h2>
          <>
          {loading ? (
              <p>Loading Pickle Rick</p>
          ) : (
            <>
              <section>
                  <h2>Pickle Ricks Results</h2>
                  {characters.map((char) => (
                      <li key={char.id}>
                          
                      </li>
                  ))}
              </section>
            </>
          )}
          </>
        </>
    )
}
