# First App NextJs v13 (beta) by Gardus
I'm currently learning the Beta version of NextJs 13 and will be practicing and adding code.
* url: https://nextjs13-firstproject.vercel.app/

## Enviroment
Ubuntu 22.04

## Requirements:
- Node v16.8 or later
- Yarn

## Installation:
```
npx create-next-app@latest --experimental-app
```
- name project: nextjs13-firstproject
- typescript: no
- tailwind css: yes
- use src/: no

## Start the development server:
```
yarn dev
```

## Dev

### Directories
app/
    page.js
    layout.js
    <functionality>
        page.jsx
components/
    <ui>
        Navbar.jsx
        ...
    <functionality>
        <Component>.jsx
hooks/      (hooks generales)
public/
  assets/
    img/


### Page: SpaceXPage
Show a list of Launches and launch details from SpaceX's Api: 
'https://api.spacexdata.com/v3/launches'

#### Settings hostname to work images with <Image> component
Add in next.config.js:
```
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images2.imgbox.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
```
* Local images must be placed inside the 'public' folder, and then in the component's 'src' property, the path should be relative to the 'public' folder, e.g. '/assets/img/myImage.jpg'.

#### Install react-player to show videos
yarn add react-player latest

#### Install @headlessui/react (used in Navbar component)
yarn add @headlessui/react latest

## Deploy
### Install vercel (global)
```
yarn global add vercel 

vercel --version
```


### Deploying to Vercel
1. Build Project
```
yarn build
```

2. Deploy to Vercel
```
vercel
```
Select Log in to Vercel : 
Continue with Github
(Follow steps for auth to vercel)

Choose Options:
Set up and deploy "....." [Y/n] Y
which scope do you want to deploy? <userGithub> ENTER
Link to exist project? N
What's your project name? <project-name> ENTER
In which directory is your code located ? ./ ENTER
Auto Detected project settings 
Want to modify these settings [Y/n] N
...Start deploy....

Ready!!!
Link url-production 


### Note!!!
Si instalaste Vercel utilizando el comando yarn global add vercel y al ejecutar el comando vercel en la terminal obtienes el mensaje de "orden no encontrada", es posible que el directorio donde Yarn almacena los paquetes globales no se encuentre en tu PATH.

Para solucionar este problema, debes agregar el directorio global de Yarn a tu variable PATH. Puedes hacerlo siguiendo estos pasos:

1. Abre una terminal y ejecuta el siguiente comando para ver la ruta de tu directorio global de Yarn:
```
yarn global bin
```

2. Copia la ruta que se muestra en la terminal.

3. Abre el archivo .bashrc en tu editor de texto preferido. Puedes hacerlo ejecutando el siguiente comando en la terminal:
```
vi ~/.bashrc
```

4. Agrega la siguiente línea al final del archivo .bashrc, reemplazando <ruta> con la ruta que copiaste en el paso 2:
```
export PATH="$PATH:<ruta>"
```

5. Guarda y cierra el archivo .bashrc.

6. Ejecuta el siguiente comando para cargar los cambios en tu terminal actual:
```
source ~/.bashrc
```

7. Ahora deberías ser capaz de ejecutar el comando vercel sin problemas.


## Context
Enables managing variables globally among components.

/context/TaskContext.js


