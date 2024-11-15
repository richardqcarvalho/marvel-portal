import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import "./index.css";

function Pagination(props: {
  setPaginate: (T: number) => void;
  setCount: (T: number) => void;
  total: number;
  count: number;
  paginate: number;
}) {
  const { setPaginate, setCount, total, count, paginate } = props;
  const pages = Math.ceil(total / count);
  const from = count * (paginate - 1) + 1;
  const to = count * paginate < total ? count * paginate : total;

  return (
    <>
      <div className="select-information">
        <span className="number-information">{`Showing ${from}-${to} of ${total}`}</span>
        {total >= 10 && (
          <select
            onChange={(e) => setCount(parseInt(e.target.value))}
            defaultValue={count}
          >
            <option value="10">10</option>
            {total >= 20 && <option value="20">20</option>}
            {total >= 30 && <option value="30">30</option>}
            {total >= 40 && <option value="40">40</option>}
            {total >= 50 && <option value="50">50</option>}
          </select>
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: pages }).map((_, i) => (
          <button onClick={() => setPaginate(i + 1)} key={i}>
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}

function Characters() {
  const [count, setCount] = useState(10);
  const [total, setTotal] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginate, setPaginate] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const getCharacters = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://gateway.marvel.com/v1/public/characters?apikey=${
            process.env.REACT_APP_PUBLIC_KEY
          }&offset=${(paginate - 1) * count}&limit=${count}`,
          { signal: controller.signal }
        );
        const { data } = await result.json();
        setCharacters(data.results);
        setTotal(data.total);
        setLoading(false);
      } catch (error) {}
    };

    getCharacters();

    return () => controller.abort();
  }, [paginate, count]);

  return (
    <PageContainer>
      {loading ? (
        <span>Loading characters...</span>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {characters.map(
                (character: {
                  name: string;
                  id: number;
                  description: string;
                }) => (
                  <tr key={character.id}>
                    <td>{character.name}</td>
                    <td>{character.description}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          {total > 0 && (
            <Pagination
              setPaginate={setPaginate}
              setCount={setCount}
              count={count}
              total={total}
              paginate={paginate}
            />
          )}
        </>
      )}
    </PageContainer>
  );
}

export default Characters;
