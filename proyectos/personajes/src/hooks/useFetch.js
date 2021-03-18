// custom hook es una funcion personalizada que involucra uno o mas hooks
// custom hooks -> funcional

//SSR -> NEXT / NUST
//Lazy, Suspense (importacion dinamica)

import { useEffect, useState } from "react";
import { environment } from "./../constants";

export const useFetch = (endpoint, initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  const fechData = async () => {
    try {
      setFetching(true);
      const result = await fetch(`${environment.BASE_URL}/${endpoint}`);
      const data = await result.json();
      setData(data);
      setFetching(false);
    } catch (e) {
      setData(initialState);
      setFetching(false);
      setError(true);
    }
  };
  useEffect(() => {
    fechData();
  }, [endpoint]);
  return [data, fetching, error];
};

/*
function useFecht(url, opcion, inicialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
    const getData = async () =>{
       const response = await fetch (url, opcion)
       const data = 
    }
}
*/
/*
const useFetch = (url, options, intialState) => {
  const [data, setData] = React.useState(intialState);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchApi = async (callback) => {
    try {
      const response = await fetch(url, options);
      const resData = await callback(response);

      setData(resData);
      setLoading(false);

      return data;
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  return [{ data, error, loading }, fetchApi];
};
*/
