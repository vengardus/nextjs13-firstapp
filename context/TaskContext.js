'use client'
import { createContext, useContext, useState } from "react";

const TaskContext = createContext()

export const useTask = () => {
    const context = useContext(TaskContext)
    if ( !context ) 
        throw new Error('useTask must used within a provider.')
    return context
}

export const TaskProvider = ({ children }) => {
    const [ tasks, setTasks ] = useState( [] )

    const createTask = ({ task }) => {
        setTasks((currentTasks) => (
            [...currentTasks, task]
        ))
        return true
    }

    const deleteTask = ({ newTasks }) => {
        setTasks( newTasks )
        return true
    }

    return <TaskContext.Provider 
                value= {  {
                    tasks, 
                    createTask, 
                    deleteTask,
                } } >
        { children }
    </TaskContext.Provider>
}