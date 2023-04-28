import { useState, useEffect } from 'react'

// GET Request
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

export const useGetFetch = ({ 
    isEnabled=true, 
    isRefresh=false,
    url 
  }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [msgError, setMsgError] = useState(null)
  const [status, setStatus] = useState(0)

  // useEffect no debe ser async
  useEffect(() => {
    const getRequest = async ()=> {
      const response = await getFetch(url)
      setData(response.data)
      setIsLoading(false)
      setMsgError(response.error)
      setStatus(response.status)
    }

    if ( isEnabled ) getRequest()
    
  }, [url, isEnabled, isRefresh])

  return [data, isLoading, msgError, status]
}


/* POST, PUT request */
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

export const usePostFetch = ({ 
    dataSend, 
    isEnabled=false, 
    method, /* POST, PUT */
    url 
  }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [msgError, setMsgError] = useState(null)
  const [status, setStatus] = useState(0)

  // useEffect no debe ser async
  useEffect(() => {
    const postRequest = async ()=> {
      const response = await postFetch(url, dataSend, method)
      setData(response.data)
      setIsLoading(false)
      setMsgError(response.error)
      setStatus(response.status)
    }

    if ( isEnabled ) postRequest()

  }, [url, isEnabled, dataSend, method])

  return [data, isLoading, msgError, status]
}


/* DELETE request  */
const deleteFetch = async (url) => {
  const response = {
    data: null,
    status: 0,
    error: null
  }
  const requestInit = {
    method: 'DELETE',
  }

  try {
    const resp = await fetch(url, requestInit)
    //response.data = await resp.json() NOt return content
    response.status = resp.status
  } catch (error) {
    console.log('Error!:', error.message)
    response.error = error.message
  }
  return response
}

export const useDeleteFetch = ({ 
    isEnabled=true,
    url
  }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [msgError, setMsgError] = useState(null)
  const [status, setStatus] = useState(0)

  // useEffect no debe ser async
  useEffect(() => {
    const deleteRequest = async ()=> {
      const response = await deleteFetch(url)
      setData(response.data)
      setIsLoading(false)
      setMsgError(response.error)
      setStatus(response.status)
    }

    if ( isEnabled ) deleteRequest()

  }, [url, isEnabled])

  return [data, isLoading, msgError, status]
}
