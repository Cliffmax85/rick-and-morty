import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>  {
        async function fetchCharacterDetail() {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await res.json();
            setDetail(data);
            setLoading(false);
        };
        fetchCharacterDetail();
    
}, []);

return (
    <div>
      {
        loading
          ? <p>Loading character...</p>
          : (
            <div>
              <h3>{detail.name}</h3>
              <img src={detail.image} alt={`image of ${detail.name}`} />
              <p>Species: {detail.species}</p>
              <p>Status: {detail.status}</p>
              <p>Gender: {detail.gender}</p>
            </div>
          )
      }
    </div>
  )
}