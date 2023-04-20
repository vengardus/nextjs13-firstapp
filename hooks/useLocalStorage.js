import { useState, useEffect } from "react"

export default function useLocalStorage( { key, initialState }) {
    const [ state, setState ] = useState( initialState)
    const [ loading, setLoading ] = useState( true )

    // localStorage.getItem
    useEffect(() => {
        const items = localStorage.getItem(key)
        const tasks = JSON.parse(items)
        if (tasks.length)
            setState(tasks)
        setLoading( false)
    }, [])

    // localStorage.setItem
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify( state ))
    }, [ state ])

    return [ state, setState, loading ]
}

