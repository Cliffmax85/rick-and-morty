import { useState, useEffect } from "react";
import Card from "../../components/Card";




export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchCharacters() {
            const res = await fetch('https://rickandmortyapi.com/api/character');
            const { results } = await res.json();
            const data = results.map((char) => ({
                name: char.name,
                image: char.image,
                species: char.species,
                status: char.status,

            }))
            setCharacters(data);
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
              <div>
                  <h2>Pickle Ricks Results</h2>
                  <div>
                  {characters.map((char) => (
                      
                          <Card key={char.id} 
                          name={char.name}
                          image={char.image}
                          species={char.species}
                          status={char.status}
                          />
                    
                  ))}
                </div>
              </div>
            </>
          )}
          </>
        </>
    )
}
