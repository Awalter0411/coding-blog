import { useEffect, useState } from 'react'
import { BASE_URL } from '../config/config'
const useFetch = url => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  const abortCont = new AbortController()
  useEffect(() => {
    setTimeout(() => {
      // 解决组件卸载后仍然更新的问题
      fetch(BASE_URL + url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw Error('server or network error')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log(err)
          } else {
            setError(err.message)
            setIsPending(false)
          }
        })
    }, 1000)
    return () => abortCont.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch
