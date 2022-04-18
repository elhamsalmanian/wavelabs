import '../styles/globals.css'
import { AppContextProvider } from '../contexts/appContext'
import { ThemeProvider } from 'next-themes'
import Layout from '../containers/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ThemeProvider attribute="class">      
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppContextProvider>
      
    )
}

export default MyApp
