import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comic from '../../components/Comic/Comic'
import Heart from '../../components/Heart/Heart'
import { useCharactersContext } from '../../shared/contexts/CharactersProvider'
import './CharacterDetailsPage.css'

const CharacterDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  const {
    selectCharacterById,
    selectedCharacter,
    getComicsListByCharacterId,
    selectedComics,
    loading
  } = useCharactersContext()
  useEffect(() => {
    if (id) {
      selectCharacterById(parseInt(id))
      getComicsListByCharacterId(parseInt(id))
    }
  }, [id])

  const imageUlr =
    selectedCharacter?.thumbnail.path +
    '/portrait_uncanny.' +
    selectedCharacter?.thumbnail.extension

  return (
    <>
      {!loading && selectedCharacter && id ? (
        <>
          <div className="character-details-header-container">
            <div className="character-details-header">
              <div className="character-image-container">
                <img src={imageUlr} className="character-image" />
              </div>
              <div className="character-info">
                <div className="character-title">
                  {selectedCharacter.name.toUpperCase()}
                  <Heart id={parseInt(id)} height="24px" width="21.68px" />
                </div>
                <div className="character-desc">
                  {selectedCharacter.description}
                </div>
              </div>
            </div>
          </div>
          <div className="comics-container">
            <div className="comics-title-section">COMICS</div>
            <div className="comics-list-container">
              {selectedComics.map(
                ({ id, title, thumbnail: { path, extension }, dates }) => (
                  <Comic
                    key={`${id}`}
                    title={title}
                    imagePath={path}
                    imageExtension={extension}
                    year={
                      dates
                        .find(({ type }) => type === 'onsaleDate')!
                        .date.toString()
                        .split('-')[0]
                    }
                  />
                )
              )}
            </div>
            <div className="barra-progreso" style={{ width: `60%` }}></div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default CharacterDetailsPage
