import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] =  useState(null);
  
  useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if(!res.ok){
                throw Error("Network error, couldn't fetch data for that resource");
              }
              return res.json();
            })
            .then((data) => {
              setData(data);
              setIsPending(false);
            })
            .catch(
              err => {
                console.log(err);
                setError(err.message);
                setIsPending(false);
              }
            )
              
        }, 500);
      }, [url]);

      return {data, isPending, error};
}
export default useFetch;