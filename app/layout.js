import './globals.css'

export const metadata = {
  title: 'SOFALA — POS',
  description: 'SOFALA Loyalty Agent — Point of Sale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
