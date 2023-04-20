import { ACTIONS } from "@/app/data"
import { TasksForm } from "@/components/tasks/TaskForm"

const TasksFormPage = ( { params } ) => {
  return (
    <TasksForm 
      action={ params.id? ACTIONS.update : ACTIONS.create } 
      id={ params.id }
    />
  )
}

export default TasksFormPage