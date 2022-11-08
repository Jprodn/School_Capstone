import { useState, useEffect } from "react"

const useFetch = (url = null) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const abortCont = new AbortController();
    console.log("useEffect ran.")
    console.log("url: " + url)
    fetch(url, {signal: abortCont.signal})
    .then(response => {
      console.log("response ok: " + response)
      if (!response.ok) {
        console.log("server is down!")
        throw Error(`Could not fetch data from (${url}).`)
      }
      console.log("server is up!")
      return response.json()
    })
    .then(data => {
      setData(data)
      setIsPending(false)
      setError(null)
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
      setIsPending(false)
        setError(err.message)
      }
    })
    return () => abortCont.abort();
  }, []);
  return { data, isPending, error }
}

export default useFetch