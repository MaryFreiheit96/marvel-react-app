import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import { useCharactersContext } from '../../shared/contexts/CharactersProvider'
import './ListCharactersPage.css'
import searchIcon from '../../shared/assets/search-icon.svg'

const ListCharactersPage = () => {
  const { getCharacterList, characterList, loading, favSelected } =
    useCharactersContext()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getCharacterList()
  }, [])

  const handleChange = (event: any) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    getCharacterList(searchInput)
  }

  return loading ? null : (
    <div className="list-characters-page-container">
      {favSelected ? <h1>FAVOURITES</h1> : null}
      <div className="search-box-container ">
        <img src={searchIcon} />
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={searchInput}
            onChange={handleChange}
            placeholder="SEARCH CHARACTER..."
            className="input-box"
          />
        </form>
      </div>
      <div className="results-count">{characterList.length} RESULTS</div>
      <div className="character-list-container">
        {characterList.map(({ id, name, thumbnail: { path, extension } }) => (
          <Card
            key={`${id}`}
            id={id}
            name={name}
            imagePath={path}
            imageExtension={extension}
          />
        ))}
      </div>
    </div>
  )
}

export default ListCharactersPage
