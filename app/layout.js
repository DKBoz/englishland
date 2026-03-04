import { Nunito, Baloo_2 } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
})

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-baloo',
})

export const metadata = {
  title: 'EnglishLand',
  description: 'İngilizce öğrenmek hiç bu kadar eğlenceli olmamıştı!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${nunito.variable} ${baloo.variable} ${nunito.className}`}>
        {children}
      </body>
    </html>
  )
}