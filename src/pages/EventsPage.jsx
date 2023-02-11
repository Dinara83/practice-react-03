import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { fetchEvents } from 'servises/moviesApi';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getApiEvents = async () => {
      try {
        const data = await fetchEvents();
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getApiEvents();
  }, []);

  const elements = events.map(({ name, id }) => {
    return <li key={id}><Link to={id}>{name}</Link></li>;
  });
  return (
	<>
	<ul>{elements}</ul>
	<Outlet />
	</>
  )
  
};

export default EventsPage;
