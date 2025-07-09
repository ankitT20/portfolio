import './globals.css'
// import { Poppins } from 'next/font/google'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
//   display: 'swap',
// })

export const metadata = {
  title: 'Ankit Portfolio',
  description: 'Built with Next.js',
  icons: {
    icon: '/faviconn.png', // ✅ Add this line
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans">
      <body className="font-sans">{children}</body>
    </html>
  )
}
