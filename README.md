# First Proyect NextJs v13 (beta)

## Requirements:
- Node v16.8 or later

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
    <functionality>
        <Component>.jsx

### SpaceXPage
Show a list of Launches and launch details from SpaceX's Api: 
'https://api.spacexdata.com/v3/launches'

#### Images with <Image /> component
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