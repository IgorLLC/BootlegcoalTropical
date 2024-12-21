import './globals.css'

export const metadata = {
  title: 'Bootleg Coal',
  description: 'Stories and history about bootleg coal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
