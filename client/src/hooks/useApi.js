import { useEffect, useState } from 'react'
import client from '../api/client'

const useApi = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const res = await client.get(url)
      console.log(res)
      setData(res.data)
      setLoading(false)
    }
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, setData, setLoading }
}

export default useApi
