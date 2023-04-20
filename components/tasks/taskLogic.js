import { ACTIONS } from '@/app/data';
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
    if ( action === ACTIONS.create ) {
        task.id = uuid()
        task.completed = false
    }
    return true
}

export const getTask = ( { tasks, id } ) => {
    const task = tasks.filter((task) => task.id == id)
    return task? task[0] : null
}

export const taskPreCreate = ( { task, action, showMsg }) => {
    const [ok, msg] = taskValidate({ task })

    if ( !ok ) {
      showMsg( msg )
      return false
    }
    if ( !taskPostValidate({ task, action }) ) {
      showMsg( 'Ocurrió un error en PostValidate' )
      return false
    }

    return true
}

export const taskPreUpdate = ( { tasks, task, showMsg, action }) => {
    const [ok, msg] = taskValidate({ task })

    if ( !ok ) {
      showMsg( msg )
      return false
    }
    if ( !taskPostValidate({ task, action }) ) {
      showMsg( 'Ocurrió un error en PostValidate' )
      return false
    }

    const newTasks = tasks.map((x) => (
        (x.id == task.id)? task : x
    ))
    if ( !newTasks ) 
      setMsg('Error al actualizar, no se encontró elemento')
    
    return newTasks
    
}

export const taskPreDelete = ({ tasks, id }) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    return newTasks
}