import { v4 as uuid } from 'uuid';

export const taskValidate = ( { task } ) => {
    let msg = null
    let ok = false

    if ( task.title === null 
        || ! task.title.length
    )
        msg = 'Título no puede ser vacío'
    else if (  task.description === null
        || ! task.description.length
    ) 
        msg = 'Descripcion no puede ser vacía'
    else 
        ok = true    

    return [ ok, msg ]
}

export const taskPostValidate = ({ task, action }) => {
    if ( action === 'new') {
        task.id = uuid()
        task.completed = false
    }
    return true
}

export const taskDeleteById = ({ tasks, id }) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    return newTasks
}

export const getTask = ( { tasks, id } ) => {
    const task = tasks.find(task => task.id == id)
    return task
}

export const taskUpdateById = ( { tasks, task }) => {
    const pos = tasks.findIndex((x) => x.id == task.id)
    let tasksUpdate = null
    if ( pos != -1 ) {
        tasksUpdate = [ ...tasks ]
        tasksUpdate[pos] = task
    }

    return tasksUpdate
}