import { Inter, Playfair_Display } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./Providers"
import { Metadata } from "next"

import "./globals.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Header } from "@/components/Header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "RISING LAB | LAB GROWN DIAMONDS",
  description: "The Rise of Lab Grown Diamond Marketplace",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {/* <Navbar /> */}
            <main className="flex-1 mt-">{children}</main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

