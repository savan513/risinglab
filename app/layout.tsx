import { Inter, Playfair_Display } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./Providers"
import { Toaster } from "sonner"

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

export const metadata = {
  title: "RISING LAB | LAB GROWN DIAMONDS",
  description:
    "Discover exceptional diamonds and fine jewelry at RISING LAB. Crafting timeless elegance since 1990.",
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
            <Toaster position="top-center" theme="dark" richColors />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

