'use client'
import { Button } from '@/components/ui/Button'
import { useTask } from '@/context/TaskContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getTask, taskPreCreate, taskPreUpdate } from "@/components/tasks/taskLogic";
import { ACTIONS } from '@/app/data'

export const TasksForm = ({ action, id }) => {
  const { tasks, createTask, updateTask } = useTask()
  const router = useRouter()
  const [msg, setMsg] = useState(null)
  const [taskInput, setTaskInput] = useState({
    title: '',
    description: ''
  })

  // Carga task si action es update
  useEffect(() => {
    if (action == ACTIONS.update) {
      const task = getTask({ tasks, id })
      if (task) setTaskInput(task)
    }
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setTaskInput((taskCurrent) => ({
      ...taskCurrent,
      [e.target.name]: e.target.value
    }))
  }

  const handleCancel = (e) => {
    e.preventDefault()
    router.push('/tasks')
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
        createTask({ task })
        router.push('/tasks')
      }
      return
    }
    // update
    const newTasks = taskPreUpdate({ tasks, task, showMsg, action })
    if (newTasks) {
      updateTask({ newTasks })
      router.push('/tasks')
      return
    }
  }

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

