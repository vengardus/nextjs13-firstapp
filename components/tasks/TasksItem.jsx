'use client'
import { useRouter } from "next/navigation"
import { Button } from "../ui/Button"

export const TasksItem = ({ task }) => {
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/tasks/${ task.id }`)
  }

  const handleDelete = () => {
    console.log('delete')
  }

  return (
    <div
      className="rounded-lg border-2 border-green-900 p-4 w-1/2 bg-gray-800 hover:bg-gray-600 hover:text-white flex flex-col space-y-3"
      onClick={ handleEdit }
    >
      <div className="font-bold text-lg">{task.title}</div>
      <div>{task.description}</div>
      <div className="flex justify-center pt-2">
        <Button handleClick={ handleDelete }>
          Eliminar
        </Button>
      </div>
    </div>
  )
}
