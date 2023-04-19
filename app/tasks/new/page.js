import { TasksForm } from "@/components/tasks/TaskForm"

const TasksFormPage = ( { params } ) => {
  return (
    <TasksForm 
      action={ params.id? 'edit' : 'new' } 
      id={ params.id }
    />
  )
}

export default TasksFormPage