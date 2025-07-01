import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { GripVerifyScript } from "@/components/grip-verify-script"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nyafilmer - Stream Movies & TV Shows Online',
  description: 'Watch the latest movies and TV shows in HD quality. Stream trending films, popular series, and coming soon releases on Nyafilmer.',
  keywords: 'movies, tv shows, streaming, watch online, HD movies, latest films',
  authors: [{ name: 'Nyafilmer' }],
  openGraph: {
    title: 'Nyafilmer - Stream Movies & TV Shows Online',
    description: 'Watch the latest movies and TV shows in HD quality.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyafilmer - Stream Movies & TV Shows Online',
    description: 'Watch the latest movies and TV shows in HD quality.',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GripVerifyScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
