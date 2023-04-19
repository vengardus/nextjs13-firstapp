'use client'
import { useRouter } from "next/navigation"
import { Button, ButtonParm } from "../ui/Button"
import { useTask } from "@/context/TaskContext"
import { taskDeleteById } from "./taskLogic"

export const TasksItem = ({ task }) => {
  const router = useRouter()
  const { tasks, deleteTask } = useTask()

  const handleEdit = () => {
    router.push(`/tasks/${ task.id }`)
  }

  const handleDelete = (e, id) => {
    const newTasks = taskDeleteById({ tasks, id })
    deleteTask({ newTasks })
    e.stopPropagation()
  }

  return (
    <div
      className="rounded-lg border-2 border-green-900 p-4 w-1/2 bg-gray-800 hover:bg-gray-600 hover:text-white flex flex-col space-y-3"
      onClick={ handleEdit }
    >
      <div className="font-bold text-lg">{task.id}</div>
      <div className="font-bold text-lg">{task.title}</div>
      <div>{task.description}</div>
      <div className="flex justify-center pt-2">
        <ButtonParm handleClick={ handleDelete } parm={ task.id } >
          Eliminar
        </ButtonParm>
      </div>
    </div>
  )
}
