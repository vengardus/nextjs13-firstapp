export const navigation = [
    {
      name: 'Inicio',
      href: '/',
      isProject:false

    },
    // {
    //   name: 'Apis',
    //   href: '#',
    //   children: [
    //     {
    //       name: 'SpaceX',
    //       href: '/spacex',
    //     },
    //     {
    //       name: 'Producto 2',
    //       href: '#',
    //     },
    //   ],
    // },
    {
      name: 'SpaceX',
      href: '/spacex',
      title: 'SpaceX Launches',
      description: 'Listado de Lanzamientos de SpaceX',
      detail:'Obtiene datos de su Api pública.',
      image:'spacex4.jpg',
      isProject:true
    },
    {
      name: 'Tasks',
      href: '/tasks',
      title: 'Tasks',
      description: 'Registro de tareas',
      detail:'CRUD tareas almacenadas en el localStorage.',
      image:'tasks3.jpg',
      isProject:true
    },
    {
      name: 'Tasks-Api',
      href: '/tasksapi',
      title: 'Tasks fetch Api',
      description: 'Registro de tareas llamando Api',
      detail:'Utiliza la api de la app django-crud-api',
      image:'tasks.png',
      isProject:true
    },
    {
      name: 'About',
      href: '/about',
      isProject:false
    },
  ]