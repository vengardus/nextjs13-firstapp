import { ACTIONS } from "@/app/data"
import { TasksForm } from "@/components/tasksapi/TaskForm"

const TasksApiFormPage = ( { params } ) => {
  return (
    <TasksForm 
      action={ params.id? ACTIONS.update : ACTIONS.create } 
      id={ params.id }
    />
  )
}

export default TasksApiFormPage