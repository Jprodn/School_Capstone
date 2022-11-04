import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setTimeout(() => { // setTimeout to simulate app loading (using only during development)
          fetch(url)
          .then(response => {
            if (!response.ok) {
              throw Error('Could not fetch data from (localhost:8001/landmarks).')
            }
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
        }, 2000)
      }, []);

      return { data, isPending, error }
}

export default useFetch