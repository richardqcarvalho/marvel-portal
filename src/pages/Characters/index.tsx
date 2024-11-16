import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import PageContainer from "../../components/PageContainer";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import TableLoading from "../../components/TableLoading";
import { CharacterT, PaginationT } from "../../models";

function Characters() {
  const [pagination, setPagination] = useState<PaginationT>({
    count: 10,
    page: 1,
  });
  const [total, setTotal] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<CharacterT>({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const getCharacters = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://gateway.marvel.com/v1/public/characters?apikey=${
            process.env.REACT_APP_PUBLIC_KEY
          }&offset=${(pagination.page - 1) * pagination.count}&limit=${
            pagination.count
          }${searchTerm && `&nameStartsWith=${searchTerm}`}`,
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
  }, [pagination, searchTerm]);

  return (
    <PageContainer>
      <h1>Characters</h1>
      {loading ? (
        <TableLoading message="Loading characters..." />
      ) : (
        <>
          {character.id && (
            <Modal
              onBackgroundClick={() => setCharacter({})}
              item={character}
            />
          )}
          <Table
            items={characters}
            columns={[
              { title: "Name", data: "name" },
              { title: "Description", data: "description" },
            ]}
            onRowClick={(character: CharacterT) => setCharacter(character)}
            onSearchClick={(filter: string) => setSearchTerm(filter)}
            searchTerm={searchTerm}
          />
          {total > 0 && (
            <Pagination
              setPagination={setPagination}
              count={pagination.count}
              total={total}
              page={pagination.page}
            />
          )}
        </>
      )}
    </PageContainer>
  );
}

export default Characters;
