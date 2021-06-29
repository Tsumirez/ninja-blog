import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancel = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: cancel.signal })
        .then((res) => {
          if (!res.ok) {
            setIsPending(false);
            setData(null);
            throw Error("Just as you thought - it's fucked.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => cancel.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
