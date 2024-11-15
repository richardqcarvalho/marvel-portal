import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getCharacters = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_PUBLIC_KEY}`,
          { signal: controller.signal }
        );
        const { data } = await result.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {}
    };

    getCharacters();

    return () => controller.abort();
  }, []);

  return (
    <PageContainer>
      {loading ? (
        <span>Loading characters...</span>
      ) : (
        <>
          {characters.map((character: { name: string }) => (
            <span>{character.name}</span>
          ))}
        </>
      )}
    </PageContainer>
  );
}

export default Characters;
