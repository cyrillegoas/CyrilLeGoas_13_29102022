import { useCallback, useState } from 'react';

export const useFetchCallback = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCall = useCallback(
    async (options) => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (json.status >= 400) setError(json.message);
        else setData(json);
      } catch (errorMessage) {
        setError(new Error(errorMessage));
      }
    },
    [url]
  );

  return { fetchCall, data, error };
};
