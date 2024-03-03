import { useNavigate } from 'react-router-dom'
import { routes } from './Routes'

export const useNavigations = () => {
  const navigate = useNavigate()

  const goToHome = () => navigate(routes().root)
  const goToCharacterDetails = (id: number) =>
    navigate(routes().characterDetails(id))

  return {
    goToHome,
    goToCharacterDetails
  }
}

export default useNavigations
