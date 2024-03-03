import {
  DEFAULT_LIMIT_CHARACTERS,
  DEFAULT_LIMIT_COMICS,
  MARVEL_BASE_URL
} from '../shared/types/marvel.constants'
import {
  ICharacterListItem,
  IComicItem,
  IGetCharacterListResponse,
  IGetComicsListResponse
} from '../shared/types/marvel.interfaces'

const initializeApiKeyParams = (): URLSearchParams => {
  const params = new URLSearchParams()
  params.append('ts', '1')
  params.append('apikey', 'd129117f4ece512cd42b4ca987b75968')
  params.append('hash', '4637c41be9c00bd5af90c6c56aa492bd')

  return params
}

export const getAllCharacters = async (
  name?: string
): Promise<ICharacterListItem[]> => {
  const params = initializeApiKeyParams()
  params.append('limit', DEFAULT_LIMIT_CHARACTERS)
  if (name) params.append('nameStartsWith', name)

  const fetchResponse = await fetch(
    `${MARVEL_BASE_URL}/characters?` + params.toString()
  )
  if (!fetchResponse.ok) {
    throw new Error('Error: ' + fetchResponse.status)
  }
  const response = (await fetchResponse.json()) as IGetCharacterListResponse
  return response.data.results
}

export const getCharacterById = async (
  id: number
): Promise<ICharacterListItem> => {
  const params = initializeApiKeyParams()

  const fetchResponse = await fetch(
    `${MARVEL_BASE_URL}/characters/${id}?` + params.toString()
  )
  if (!fetchResponse.ok) {
    throw new Error('Error: ' + fetchResponse.status)
  }

  const response = (await fetchResponse.json()) as IGetCharacterListResponse
  return response.data.results[0]
}

export const getCharacterComics = async (
  characterId: number
): Promise<IComicItem[]> => {
  const params = initializeApiKeyParams()
  params.append('limit', DEFAULT_LIMIT_COMICS)
  params.append('orderBy', 'onsaleDate')

  const fetchResponse = await fetch(
    `${MARVEL_BASE_URL}/characters/${characterId}/comics?` + params.toString()
  )
  if (!fetchResponse.ok) {
    throw new Error('Error: ' + fetchResponse.status)
  }

  const response = (await fetchResponse.json()) as IGetComicsListResponse
  return response.data.results
}
