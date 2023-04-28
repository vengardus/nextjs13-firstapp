'use client'
import { useRouter } from "next/navigation"
import { ButtonParm } from "../ui/Button"
import { useDeleteFetch } from "@/hooks/useFetch"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const URL_TASKS = `http://localhost:8000/tasks/api/v1/tasks/`

export const TasksItem = ({ task, updateRefresh }) => {
  const router = useRouter()
  const [ id, setId ] = useState(null)
  const [ actionDelete, setActionDelete ] = useState(false)
  const URL_TASK = `${URL_TASKS}${id}/`
  const [ , isLoading, msgError, status ] = useDeleteFetch({ 
    isEnabled:  (id && actionDelete), 
    url:        URL_TASK, 
  })

  useEffect(() => {
    if ( actionDelete ) {
      if ( msgError ) toast.error(`Ocurrió un error: ${ msgError }`)

      if ( status == 204 ) toast.success('Tarea eliminada.')
      
      if ( status ) {
        setActionDelete( false )
        updateRefresh() // para forzar useFetch:getFetch
      }
    }
  }, [ actionDelete, msgError, status, updateRefresh ])

  const handleEdit = () => {
    router.push(`/tasksapi/${task.id}`)
  }

  const handleDelete = (e, id) => {
    setId(id)
    setActionDelete(true)
    e.stopPropagation()
  }

  return (
    <div
      className="rounded-lg border-2 border-green-900 p-4 w-4/5 md:w-1/2 bg-gray-800 hover:bg-gray-600 hover:text-white flex flex-col space-y-3"
      onClick={ handleEdit }
    >
      <div className="font-bold text-2xl">{task.title}</div>
      <div className="italic text-lg">{task.description}</div>

      <ButtonParm
        className={'flex place-self-center'}
        handleClick={ handleDelete }
        parm={ task.id }
      >
        <div className="flex space-x-3">
          <span>Eliminar</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </div>
      </ButtonParm>

    </div>
  )
}
