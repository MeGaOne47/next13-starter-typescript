"use client"
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '@/components/app.header';
import AppFooter from '@/components/app.footer';
import { Container } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header style={{margin: "20px 0px"}}>Đầu trang</header> */}
        <AppHeader />

        <Container>
          {children}
        </Container>
        
        {/* <footer style={{margin: "20px 0px"}}>Chân trang</footer> */}
        <AppFooter/>
      </body>
    </html>
  )
}
