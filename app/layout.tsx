import "../styles/globals.css"
import ClientProviders from "../components/ClientProviders"
import SiteHeader from "../components/Header"
import SiteFooter from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import type { ReactNode } from "react"

// Fonts are loaded via CSS (`styles/globals.css`) to avoid fetch-time build issues.

export const metadata = {
  title: "Saints Funeral Directors",
  description: "Honouring Lives With Dignity & Compassion"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <WhatsAppButton />
          </div>
        </ClientProviders>
      </body>
    </html>
  )
}
