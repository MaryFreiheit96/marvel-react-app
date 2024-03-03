import './Navbar.css'
import marvelLogo from '../../shared/assets/marvel-logo.svg'
import fullHeart from '../../shared/assets/full-heart.svg'
import emptyHeart from '../../shared/assets/empty-heart.svg'

import { useCharactersContext } from '../../shared/contexts/CharactersProvider'
import useNavigations from '../../router/Navigation'

const Navbar = () => {
  const { favCounter, filterByFavs, loading, getCharacterList } =
    useCharactersContext()
  const { goToHome } = useNavigations()

  const goHomeAndListAllCharacters = () => {
    getCharacterList()
    goToHome()
  }

  const listFavs = () => {
    filterByFavs()
    goToHome()
  }

  return (
    <div
      className="navbar-container"
      style={{
        borderBottom: loading
          ? '4px solid #ec1d24'
          : '1px solid rgba(51, 51, 51, 1)'
      }}
    >
      <img
        src={marvelLogo}
        className="marvel-logo"
        alt="marvelLogo"
        onClick={goHomeAndListAllCharacters}
      />
      <div className="heart-container">
        {favCounter ? (
          <>
            <img
              src={fullHeart}
              className="heart-logo-navbar"
              alt="fullHeart"
              onClick={listFavs}
            />
            <span>{favCounter}</span>
          </>
        ) : (
          <img src={emptyHeart} className="heart-logo-navbar" alt="fullHeart" />
        )}
      </div>
    </div>
  )
}

export default Navbar
