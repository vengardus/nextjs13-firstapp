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

export const useGetFetch = ({ url, condition=true, refresh }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(0)

  console.log('USEGETFETCH')
  // useEffect no debe ser async
  useEffect(() => {
    const getRequest = async ()=> {
      const response = await getFetch(url)
      setData(response.data)
      setLoading(false)
      setError(response.error)
      setStatus(response.status)
    }

    if ( condition ) {
      console.log('DO GETFETCH')
      getRequest()
    }

  }, [url, condition, refresh])

  return [data, loading, error, status]
}

/* Post */
const postFetch = async (url, data, method) => {
  const response = {
    data: null,
    status: 0,
    error: null
  }
  const requestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  console.log(requestInit)

  try {
    const resp = await fetch(url, requestInit)
    response.data = await resp.json()
    response.status = resp.status
  } catch (error) {
    console.log('Error!:', error.message)
    response.error = error.message
  }
  return response
}

export const usePostFetch = ({ url, condition=false, dataSend, method }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(0)

  // useEffect no debe ser async
  useEffect(() => {
    const postRequest = async ()=> {
      console.log('Fetch Post')
      const response = await postFetch(url, dataSend, method)
      setData(response.data)
      setLoading(false)
      setError(response.error)
      setStatus(response.status)
      console.log('reponseError', response.error)
      console.log('reponseError', response.status)
    }

    if ( condition )
      postRequest()

  }, [url, condition, dataSend])

  return [data, loading, error, status]
}

/* Delete */
const deleteFetch = async (url) => {
  const response = {
    data: null,
    status: 0,
    error: null
  }
  const requestInit = {
    method: 'DELETE',
  }

  console.log(requestInit)
  console.log(url)

  try {
    const resp = await fetch(url, requestInit)
    console.log('RESP', resp)
    //response.data = await resp.json() NOt return content
    response.status = resp.status
  } catch (error) {
    console.log('Error!:', error.message)
    response.error = error.message
  }
  return response
}

export const useDeleteFetch = ({ url, condition=true }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(0)

  // useEffect no debe ser async
  useEffect(() => {
    const deleteRequest = async ()=> {
      const response = await deleteFetch(url)
      setData(response.data)
      setLoading(false)
      setError(response.error)
      setStatus(response.status)
    }

    if ( condition )
      deleteRequest()

  }, [url, condition])

  return [data, loading, error, status]
}