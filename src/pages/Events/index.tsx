import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import PageContainer from "../../components/PageContainer";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
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
  }, [pagination]);

  return (
    <PageContainer>
      {loading ? (
        <span>Loading events...</span>
      ) : (
        <>
          {event.id && (
            <Modal onBackgroundClick={() => setEvent({})} item={event} />
          )}
          <h1>Events</h1>
          <Table
            items={events}
            columns={[
              { title: "Title", data: "title" },
              { title: "Description", data: "description" },
            ]}
            onRowClick={(event: EventT) => setEvent(event)}
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
