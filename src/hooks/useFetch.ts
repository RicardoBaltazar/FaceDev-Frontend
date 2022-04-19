import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import api from '../services/api';

// options? podemos passar headers e options

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url, options)
      .then((response: any) => {
        setData(response.data);
      })
      .catch((err:any) => {
        console.log(err);
        console.log(err.response);
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return {
    data,
    isFetching,
    error
  };
}
