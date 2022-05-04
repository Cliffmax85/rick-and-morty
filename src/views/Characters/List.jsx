import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Card from "../../components/Card";
import { fetchRicks } from "../../services/fetchRicks";
import Detail from "./Detail";




export default function CharacterList() {
    // const { url, path } = useRouteMatch();
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchCharacters() {
            const res = await fetchRicks();
            setCharacter(res.results);
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
                  {character.map((character) => (
                    <Link to={`/character/${character.id}`} key={character.id}>
                      <Card character={character} />
                    </Link>  
                  ))}
                  </div>
              </div>
            </>
          )}
          </>
        </>
    )
}
