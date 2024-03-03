import { Route, Routes } from 'react-router-dom'
import ListCharactersPage from '../pages/ListCharactersPage/ListCharactersPage'
import CharacterDetailsPage from '../pages/CharacterDetailsPage/CharacterDetailsPage'
import { switchRoutes } from './Routes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={switchRoutes.root} element={<ListCharactersPage />} />
      <Route
        path={switchRoutes.characterDetails}
        element={<CharacterDetailsPage />}
      />
    </Routes>
  )
}
