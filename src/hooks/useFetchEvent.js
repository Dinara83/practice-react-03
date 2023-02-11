import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchEventById } from 'servises/moviesApi';

const useFetchEvent = () => {
  const [event, setEvent] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getSingleEvent = async () => {
      try {
        const result = await fetchEventById(id);
        setEvent(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSingleEvent();
  }, [id]);

  console.log(event);

  return event;
};

export default useFetchEvent;
