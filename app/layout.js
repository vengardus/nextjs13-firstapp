import './globals.css'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { TaskProvider } from '@/context/TaskContext'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <TaskProvider >
            {children}
          </TaskProvider>
        <Footer />
      </body>
    </html>
  )
}
