import { LangProvider } from '../components/context/LangContext'
import { ProjectsProvider } from '../components/context/ProjectsContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProjectsProvider>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </ProjectsProvider>
  )
}

export default MyApp


