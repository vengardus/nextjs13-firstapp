'use client'

import { useRouter } from "next/navigation"
import { useTask } from "@/context/TaskContext"
import { TasksItem } from "./TasksItem"
import { Button } from "../ui/Button"

export const TasksList = () => {
  const { tasks } = useTask()
  const router = useRouter()

  const handleNew = () => {
    router.push('/tasks/new')
  }

  return (
    <section className="flex flex-col p-4 space-y-5">
      <h1 className="text-2xl font-bold flex justify-center">Tareas</h1>
      <Button handleClick={ handleNew }>Nueva</Button>
      <div className="flex flex-col space-y-5 items-center">
        {
          tasks.map(task => (
            <TasksItem key={task.id} task={task} />
          ))
        }
      </div>
    </section>
  )
}
