"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
// import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-cyan-700 scrollbar-hide">
        {/* <ThemeProvider enableSystem={true} attribute="class"> */}
          <Navbar />
          {children}
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
