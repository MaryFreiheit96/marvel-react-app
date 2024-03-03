export interface IGetCharacterListResponse {
  data: {
    results: ICharacterListItem[]
  }
}
export interface ICharacterListItem {
  id: number
  name: string
  thumbnail: IImage
  description: string
}

export interface IImage {
  path: string
  extension: string
}

export interface IGetComicsListResponse {
  data: {
    results: IComicItem[]
  }
}

export interface IComicItem {
  id: number
  title: string
  thumbnail: IImage
  dates: ComicDates[]
}

export interface ComicDates {
  type: string
  date: Date
}
