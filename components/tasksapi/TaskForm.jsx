'use client'
import { Button } from '@/components/ui/Button'
// import { useTask } from '@/context/TaskContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { taskPreCreate, taskPreUpdateApi } from "@/components/tasks/taskLogic";
import { ACTIONS } from '@/app/data'
import { useGetFetch, usePostFetch } from '@/hooks/useFetch'
import { Toast, toast } from 'react-hot-toast';

const initialTaskInput = {
    title: '',
    description: '',
    done: false
}
const URL_TASKS = `http://localhost:8000/tasks/api/v1/tasks/`

export const TasksForm = ({ action, id }) => {
  const router = useRouter()
  const [msg, setMsg] = useState(null)
  const [taskInput, setTaskInput] = useState(initialTaskInput)

  const URL_TASK = `${URL_TASKS}${id}/`
  const [task, loading, error] = useGetFetch({ 
    url:URL_TASK, 
    condition:action==ACTIONS.update 
  })
  
  const [ save, setSave ] = useState(false)
  const [ taskToSave, setTaskToSave ] = useState({})
  const [ , loadingPost, errorPost, statusPost] = usePostFetch({ 
    url:(action==ACTIONS.create)? URL_TASKS : URL_TASK, 
    dataSend:taskToSave, 
    condition:save, 
    method:(action==ACTIONS.create)? 'POST':'PUT' 
  })
  
  
  // Carga task si action es update
  useEffect(() => {
    console.log(action, task)
    if ( action == ACTIONS.update && task ) {
      setTaskInput({
        id: task.id,
        title: task.title,
        description: task.description,
        done: task.done,
      })
    }
  }, [task, action])

  // save (create or update)
  useEffect(()=> {
    if ( save ) {
      if ( errorPost )
        setMsg(`Ocurrió un error: ${errorPost}`)

      if ( statusPost == 201 || statusPost == 200 ) {
        toast.success((action==ACTIONS.create)? 'Tarea grabada!!!' : 'Tarea actualizada!!!')
        router.push('/tasksapi')
      }
      if ( statusPost )
        setSave(false)
    }
    
  }, [errorPost, statusPost, save, router, action])

  // change input
  const handleChange = (e) => {
    e.preventDefault()
    setTaskInput((taskCurrent) => ({
      ...taskCurrent,
      [e.target.name]: e.target.value
    }))
  }

  const handleCancel = (e) => {
    e.preventDefault()
    router.push('/tasksapi')
    e.stopPropagation()
  }

  const showMsg = (value) => {
    setMsg(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const task = { ...taskInput }

    // create
    if (action == ACTIONS.create) {
      if (taskPreCreate({ task, showMsg, action })) {
        setTaskToSave(task)
        setSave(true)
        // reender => useEffect
      }
      return
    }

    // update
    if ( taskPreUpdateApi({ task, showMsg, action }) ) {
      setTaskToSave(task)
      setSave(true)
      // reender => useEffect
    }
   
  }

  if ( action == ACTIONS.update && loading) 
    return <div>Loading...</div>
  
  if ( action == ACTIONS.update && error) 
    return <div>Ocurrió un error: { error }</div>

  return (
    <div className='flex justify-center my-7'>
      <form onSubmit={(e)=> e.preventDefault() } className='flex flex-col space-y-3 m-3 w-4/5 md:w-3/5 bg-gray-800 p-5'>
        <label className='flex place-self-start'>Título:</label>
        <input
          name={'title'}
          id={'title'}
          value={taskInput.title}
          className='text-black px-2'
          onChange={handleChange}
          
        />
        <label>Descrpción:</label>
        <input
          name={'description'}
          value={taskInput.description}
          onChange={handleChange}
          className='text-black px-2'
          
        />
        <p className='text-red-500'>{msg}</p>
        <div className='flex space-x-10 justify-end pt-3'>
          <button
            type='button'
            onClick={ handleCancel }
            className='hover:text-red-400'
          >
            Regresar
          </button>
          
          <Button 
            handleClick={handleSubmit}
          >
            Grabar
          </Button>
        </div>
      </form>
    </div>
  )
}

