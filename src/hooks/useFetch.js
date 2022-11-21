import { useEffect, useState } from 'react';

export const useFetch = (url, options, callback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCall = async () => {
      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        if (json.error) throw new Error(json.error);
        else {
          setData(json);
        }
      } catch (err) {
        setError(err);
      }
    };
    fetchCall();
  }, []);

  useEffect(() => {
    if (data) callback(data);
  }, [data]);

  return [data, error];
};
