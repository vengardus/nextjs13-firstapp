'use client'
import { Button } from '@/components/ui/Button'
import { useTask } from '@/context/TaskContext'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { taskValidate, taskPostValidate } from "@/components/tasks/taskLogic";

const TasksNewPage = () => {
  const { createTask } = useTask()
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const [ msg, setMsg ] = useState(null)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const task = {
      title: titleRef.current.value,
      description: descriptionRef.current.value
    }
    const [ok, msg] = taskValidate({ task })
    if ( !ok ) {
      setMsg(msg)
      return
    }
    taskPostValidate({ task })
    if ( createTask({ task }) )
      router.push('/tasks')
  }


  return (
    <form className='flex flex-col space-y-3 m-3'>
      <label>Título:</label>
      <input
        name={'title'}
        ref={titleRef}
        className='text-black'
        required
      />
      <label>Descrpción:</label>
      <input
        name={'description'}
        ref={descriptionRef}
        className='text-black'
        required
      />
      <p className='text-red-500 bg-white1'>{ msg }</p>
      <Button handleClick={handleSubmit}>
        Grabar
      </Button>
    </form>
  )
}

export default TasksNewPage