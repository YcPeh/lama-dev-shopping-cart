import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //   console.log("in useFetch");
  //   console.log("url", url);

  useEffect(() => {
    // console.log("in useEffect of useFetch");
    const fetchData = async () => {
      try {
        setLoading(true);
        // console.log("url", url);
        const res = await makeRequest.get(url);
        // console.log("res", res);
        setData(res.data.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    // console.log(" after fetchData function in useEffect of useFetch");
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
