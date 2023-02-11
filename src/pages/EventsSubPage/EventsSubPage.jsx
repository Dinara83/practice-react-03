import useFetchEvent from 'hooks/useFetchEvent';

const EventsSubPage = () => {
  const event = useFetchEvent();

  return (
    <>
      {event && (
        <div>
          <h3>{event.name}</h3>
          <img src={event.images[0].url} alt={event.name} width={300} />
        </div>
      )}
    </>
  );
};

export default EventsSubPage;

