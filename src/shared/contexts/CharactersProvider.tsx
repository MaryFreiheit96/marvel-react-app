import { createContext, ReactNode, useContext, useState } from 'react'
import {
  getAllCharacters,
  getCharacterById,
  getCharacterComics
} from '../../services/marvelService'
import { ICharacterListItem, IComicItem } from '../types/marvel.interfaces'

interface StateProps {
  characterList: ICharacterListItem[]
  getCharacterList: (name?: string) => Promise<void> | null
  filterByFavs: () => Promise<void> | null
  favCharacters: number[]
  addFav: (id: number) => void | null
  deleteFav: (id: number) => void | null
  favCounter: number
  selectedCharacter: ICharacterListItem | null
  selectCharacterById: (id: number) => Promise<void> | null
  loading: boolean
  favSelected: boolean
  getComicsListByCharacterId: (characterId: number) => Promise<void> | null
  selectedComics: IComicItem[]
}
const initState: StateProps = {
  characterList: [],
  getCharacterList: (_?: string) => null,
  filterByFavs: () => null,
  favCharacters: [],
  addFav: (_: number) => null,
  deleteFav: (_: number) => null,
  favCounter: 0,
  selectedCharacter: null,
  selectCharacterById: (_: number) => null,
  loading: false,
  favSelected: false,
  getComicsListByCharacterId: (_: number) => null,
  selectedComics: []
}

const CharacterContext = createContext(initState)
export const CharactersProvider = ({ children }: { children: ReactNode }) => {
  const [characterList, setCharacterList] = useState(initState.characterList)
  const [favCharacters, setFavCharacters] = useState(initState.favCharacters)
  const [selectedCharacter, setSelectedCharacter] = useState(
    initState.selectedCharacter
  )
  const [loading, setLoading] = useState(false)
  const [favSelected, setFavSelected] = useState(false)
  const [selectedComics, setSelectedComics] = useState(initState.selectedComics)

  const getCharacterList = async (name?: string): Promise<void> => {
    setFavSelected(false)
    setLoading(true)
    const characters = await getAllCharacters(name)
    setCharacterList(characters)
    setLoading(false)
  }

  const addFav = (id: number): void => {
    setFavCharacters([...favCharacters, id])
  }

  const deleteFav = (id: number): void => {
    setFavCharacters(favCharacters.filter((value) => value !== id))
  }

  const filterByFavs = async () => {
    setLoading(true)
    const favs = await Promise.all(
      favCharacters.map((id) => getCharacterById(id))
    )
    setCharacterList(favs)
    setLoading(false)
    setFavSelected(true)
  }

  const selectCharacterById = async (id: number) => {
    setFavSelected(false)
    setLoading(true)
    const newSelectedCharacter = await getCharacterById(id)
    setSelectedCharacter(newSelectedCharacter)
    setLoading(false)
  }

  const getComicsListByCharacterId = async (characterId: number) => {
    setLoading(true)
    const comics = await getCharacterComics(characterId)
    setSelectedComics(comics)
    setLoading(false)
  }

  return (
    <CharacterContext.Provider
      value={{
        characterList,
        getCharacterList,
        filterByFavs,
        favCharacters,
        addFav,
        deleteFav,
        favCounter: favCharacters.length,
        selectedCharacter,
        selectCharacterById,
        loading,
        favSelected,
        getComicsListByCharacterId,
        selectedComics
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharactersContext = () => useContext(CharacterContext)
