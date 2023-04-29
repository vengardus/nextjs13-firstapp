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
      detail:'Utiliza api de la app django-crud-api (repositorio). Modo local por ahora, pendiente subir a hosting app Django',
      image:'tasks.png',
      isProject:true
    },
    {
      name: 'EFR-Tienda',
      href: '/efr-tienda',
      title: 'EFR-Tienda',
      description: 'Sitio Web de venta de equipos biométricos y captura de datos.',
      detail:'Utilizará api creada con Strapi (strapi-demo), estará alojada en Render.com',
      image:'biometria.jpg',
      isProject:true
    },
    {
      name: 'About',
      href: '/about',
      isProject:false
    },
  ]