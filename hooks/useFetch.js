import { useState, useEffect } from 'react'

const getFetch = async (url) => {
  const response = {
    data: null,
    status: 0,
    error: null
  }

  try {
    const resp = await fetch(url)
    response.data = await resp.json()
    response.status = resp.status
  } catch (error) {
    console.log('Error!:', error.message)
    response.error = error.message
  }
  return response
}

export const useGetFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(0)

  // useEffect no debe ser async
  useEffect(() => {
    getFetch(url)
      .then(response => {
        setData(response.data)
        setLoading(false)
        setError(response.error)
        setStatus(response.status)
      })
  }, [url])

  return [data, loading, error, status]
}