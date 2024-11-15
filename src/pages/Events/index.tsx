import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getEvents = async () => {
      try {
        setLoading(true);
        const result = await fetch(
          `https://gateway.marvel.com/v1/public/events?apikey=${process.env.REACT_APP_PUBLIC_KEY}`,
          { signal: controller.signal }
        );

        const { data } = await result.json();
        setEvents(data.results);
        setLoading(false);
      } catch (error) {}
    };

    getEvents();

    return () => controller.abort();
  }, []);

  return (
    <div>
      {loading ? (
        <span>Loading events...</span>
      ) : (
        <>
          {events.map((event: { title: string }) => (
            <span>{event.title}</span>
          ))}
        </>
      )}
      <button onClick={() => navigate("/")}>Go back to home</button>
    </div>
  );
}

export default Events;
