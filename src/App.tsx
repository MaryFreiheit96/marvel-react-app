import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { AppRoutes } from './router/AppRoutes'
import { CharactersProvider } from './shared/contexts/CharactersProvider'

const App = () => (
  <BrowserRouter>
    <CharactersProvider>
      <>
        <Navbar />
        <AppRoutes />
      </>
    </CharactersProvider>
  </BrowserRouter>
)

export default App
