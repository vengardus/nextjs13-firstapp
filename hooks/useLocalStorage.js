import { useState, useEffect } from "react"

export default function useLocalStorage( { key, initialState }) {
    const [ state, setState ] = useState( initialState)
    const [ loading, setLoading ] = useState( true )

    // localStorage.getItem
    useEffect(() => {
        const items = localStorage.getItem(key)
        if ( items ) {
            const tasks = JSON.parse(items)
            setState(tasks)
        }
        setLoading( false)
    }, [])

    // localStorage.setItem
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify( state ))
    }, [ state ])

    return [ state, setState, loading ]
}

