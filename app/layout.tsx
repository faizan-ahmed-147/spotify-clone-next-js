import Sidebar from './components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'

const inter = Figtree({ subsets: ['latin'] })

export const metadata = {

  title: 'Spotify Clone',
  description: 'Listen to Music',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar>
        {children}
        </Sidebar>
        </body>
    </html>
  )
}
