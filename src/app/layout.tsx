
import { Nunito } from "next/font/google";
import '../../styles/globals.css'
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
export const metadata = {
    title: 'Airbnb'
}

const font = Nunito({
    subsets: ["latin"],
})
export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={font.className}>
                <ClientOnly>
                    <Navbar />
                </ClientOnly>
                {children}
            </body>
        </html>
    )
}
