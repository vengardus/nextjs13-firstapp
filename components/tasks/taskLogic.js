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

export const taskPostValidate = ({ task }) => {
    task.id = uuid()
    task.completed = false
    return task
}

