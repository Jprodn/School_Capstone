import { useState, useEffect } from "react"

const useFetch = (url = null) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    console.log("useEffect ran.")
    console.log("url: " + url)
    fetch(url)
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
        setError(err.message)
    })
  }, []);
  return { data, isPending, error }
}

export default useFetch