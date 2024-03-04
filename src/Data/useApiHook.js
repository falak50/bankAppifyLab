import axios from 'axios';
import { useEffect, useState } from 'react';

const useApiHook = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const base_code = 'BDT';
  const url = `https://open.er-api.com/v6/latest/${base_code}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useApiHook;