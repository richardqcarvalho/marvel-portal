import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Characters() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const result = await fetch(
        `https://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_PUBLIC_KEY}`
      );
      const { data } = await result.json();
      setCharacters(data.results);
      setLoading(false);
    };

    getCharacters();
  }, []);

  if (loading)
    return (
      <div>
        <span>Loading characters...</span>
        <button onClick={() => navigate("/")}>Go back to home</button>
      </div>
    );
  else
    return (
      <div>
        {characters.map((character: { name: string }) => (
          <span>{character.name}</span>
        ))}
        <button onClick={() => navigate("/")}>Go back to home</button>
      </div>
    );
}

export default Characters;
