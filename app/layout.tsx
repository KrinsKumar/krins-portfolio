import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { Providers } from './providers'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins'
})

export const metadata: Metadata = {
    title: 'Krins - Portfolio',
    description: 'Welcome to my portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    )
}
