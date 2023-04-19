'use client'
import { Button } from '@/components/ui/Button'
import { useTask } from '@/context/TaskContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { taskValidate, taskPostValidate, getTask, taskUpdateById } from "@/components/tasks/taskLogic";

export const TasksForm = ({ action, id }) => {
  const { tasks, createTask, updateTask } = useTask()
  const router = useRouter()
  const [msg, setMsg] = useState(null)
  const [taskInput, setTaskInput] = useState({
    title: '',
    description: ''
  })

  useEffect(() => {
    // Carga task si action es 'edit'
    if (action == 'edit') {
      const task = getTask({ tasks, id })
      if (task) setTaskInput(task)
    }
  }, [])

  const handleChange = (e) => {
    setTaskInput((taskCurrent) => ({
      ...taskCurrent,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const task = { ...taskInput }
    const [ok, msg] = taskValidate({ task })
    if (!ok) {
      setMsg(msg)
      return
    }
    if (!taskPostValidate({ task, action })) {
      setMsg('Ocurrió un error en PostValidate')
      return
    }

    if (action === 'new') {
      createTask({ task })
      router.push('/tasks')
      return
    }
    // es edit
    const newTasks = taskUpdateById({ tasks, task })
    if ( !newTasks ) {
      setMsg('Error al actualizar, no se encontró elemento')
      return
    }
    updateTask({ newTasks })
    router.push('/tasks')
  }

  return (
    <form className='flex flex-col space-y-3 m-3'>
      <label>Título:</label>
      <input
        name={'title'}
        id={'title'}
        value={taskInput.title}
        className='text-black'
        onChange={handleChange}
        required
      />
      <label>Descrpción:</label>
      <input
        name={'description'}
        value={taskInput.description}
        onChange={handleChange}
        className='text-black'
        required
      />
      <p className='text-red-500 bg-white1'>{msg}</p>
      <Button handleClick={handleSubmit}>
        Grabar
      </Button>
    </form>
  )
}

