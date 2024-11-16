import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import PageContainer from "../../components/PageContainer";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import TableLoading from "../../components/TableLoading";
import { EventT, PaginationT } from "../../models";

function Events() {
  const [pagination, setPagination] = useState<PaginationT>({
    count: 10,
    page: 1,
  });
  const [total, setTotal] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState<EventT>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const getEvents = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://gateway.marvel.com/v1/public/events?apikey=${
            process.env.REACT_APP_PUBLIC_KEY
          }&offset=${(pagination.page - 1) * pagination.count}&limit=${
            pagination.count
          }${searchTerm.length > 0 ? `&nameStartsWith=${searchTerm}` : ""}${
            date.length > 0 ? `&modifiedSince=${date}` : ""
          }`,
          { signal: controller.signal }
        );
        const { data } = await result.json();
        setEvents(data.results);
        setTotal(data.total);
        setLoading(false);
      } catch (error) {}
    };

    getEvents();

    return () => controller.abort();
  }, [pagination, searchTerm, date]);

  return (
    <PageContainer>
      <h1>Events</h1>
      {loading ? (
        <TableLoading message="Loading events..." />
      ) : (
        <>
          {event.id && (
            <Modal onBackgroundClick={() => setEvent({})} item={event} />
          )}
          <Table
            items={events}
            columns={[
              { title: "Title", data: "title" },
              { title: "Description", data: "description" },
            ]}
            onRowClick={(event: EventT) => setEvent(event)}
            onSearchClick={(filter: string) => setSearchTerm(filter)}
            searchTerm={searchTerm}
            onDatePick={(date: string) => setDate(date)}
            date={date}
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

export default Events;
