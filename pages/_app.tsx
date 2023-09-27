import { UIProvider } from '@/context'
import '@/styles/globals.css'
import { darkTheme } from '@/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
