'use client'

import { useRouter } from "next/navigation"
import { useTask } from "@/context/TaskContext"
import { TasksItem } from "./TasksItem"
import { Button } from "../ui/Button"

export const TasksList = () => {
  const { tasks, loading } = useTask()
  const router = useRouter()

  const handleNew = () => {
    router.push('/tasks/new')
  }

  return (
    <section className="flex flex-col p-4 space-y-5 ">
      <div className="flex space-x-7  w-4/5 md:w-1/2 place-self-center">
        <h1 className="text-4xl font-bold flex w-4/5">Tareas</h1>
        <Button 
          handleClick={handleNew}
          className={'flex space-x-2 px-1 py-1 justify-end'}
          >
          <span>Nueva</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Button>
        
      </div>
      {
        loading
          ? <div>Loading...</div>
          :
          !tasks.length
          ? <div className="flex justify-center pt-3">No hay tareas</div>
          :
          <div className="flex flex-col space-y-5 items-center pt-3">
            {
              tasks.map(task => (
                <TasksItem key={task.id} task={task} />
              ))
            }
          </div>
      }
    </section>
  )
}
