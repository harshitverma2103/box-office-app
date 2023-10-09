import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowtId } from '../api/tvmaze';

const Show = () => {
  const { showId } = useParams();

  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowtId(showId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }
    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got Show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
