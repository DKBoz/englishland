import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800']
})

export const metadata = {
  title: 'EnglishLand',
  description: 'İngilizce öğrenmek hiç bu kadar eğlenceli olmamıştı!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  )
}