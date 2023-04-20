'use client'
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext()

export const useTask = () => {
    const context = useContext(TaskContext)
    if (!context)
        throw new Error('useTask must used within a provider.')
    return context
}

export const TaskProvider = ({ children }) => {
    const [ tasks, setTasks, loading] = useLocalStorage( { key:'tasks', initialState:[] })

    const createTask = ({ task }) => {
        setTasks((currentTasks) => (
            [...currentTasks, task]
        ))
        return true
    }

    const deleteTask = ({ newTasks }) => {
        setTasks(newTasks)
        return true
    }

    const updateTask = ({ newTasks }) => {
        setTasks(newTasks)
        return true
    }

    return <TaskContext.Provider
        value={{
            tasks,
            createTask,
            deleteTask,
            updateTask,
            loading
        }} >
        {children}
    </TaskContext.Provider>
}