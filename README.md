# First App NextJs v13 (beta) by Gardus
I'm currently learning the Beta version of NextJs 13 and will be practicing and adding code.

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
hooks/      (hooks generales)

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

#### Install react-player to show videos
yarn add react-player