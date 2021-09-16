import { useEffect, useState } from "react";

const BASE_URI = "http://localhost:4000";
const API_KEY = "ebacbe4d96ae4b099865c40736e11a47";

function useNftmApi(urlExt, params) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const baseUri = `${BASE_URI}/${urlExt}/${API_KEY}`;
    const uri = params ? `${baseUri}/${params}` : baseUri;
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setResult(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });

    return () => {};
  }, [urlExt]);

  return { isLoading, result, error };
}

export default useNftmApi;
