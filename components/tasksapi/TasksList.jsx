'use client'

import { useRouter } from "next/navigation"
import { TasksItem } from "./TasksItem"
import { Button } from "../ui/Button"
import { useGetFetch } from "@/hooks/useFetch"
import { useState } from "react"

const URL_TASKS = 'http://localhost:8000/tasks/api/v1/tasks/'

export const TasksList = () => {
  const router = useRouter()
  const [isRefresh, setIsRefresh ] = useState(false)
  const [ tasks, isLoading, msgError, status ] = useGetFetch({ 
    url: URL_TASKS, 
    isRefresh
  })

  const handleNew = () => {
    router.push('/tasksapi/new')
  }

  const updateRefresh = () => {
    // utilizado para forzar getFetch en useFetch cuando se haga el Delete
    setIsRefresh(!isRefresh)
  }

  return (
    <section className="flex flex-col p-4 space-y-5 ">
      <div className="flex space-x-7  w-4/5 md:w-1/2 place-self-center">
        <h1 className="text-4xl font-bold flex w-4/5">Tareas</h1>
        <Button 
          className={'flex space-x-2 px-1 py-1 justify-end'}
          handleClick={handleNew}
          >
          <span>Nueva</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Button>
        
      </div>
      {
        isLoading
          ? <div>Loading...</div>
          :
          msgError
          ? <div>Ocurrió un error: { msgError }</div>
          :
          !tasks.length
          ? <div className="flex justify-center pt-3">No hay tareas</div>
          :
          <div className="flex flex-col space-y-5 items-center pt-3">
            {
              tasks.map(task => (
                <TasksItem key={task.id} task={task} updateRefresh={updateRefresh} />
              ))
            }
          </div>
      }
    </section>
  )
}
