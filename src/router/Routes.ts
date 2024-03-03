import { generatePath } from 'react-router-dom'

interface SwitchRoutes {
  root: string
  characterDetails: string
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterDetails: '/details/:id'
}

export interface Routes {
  root: string
  characterDetails: (id: number) => string
}

export const routes = (): Routes => ({
  root: switchRoutes.root,
  characterDetails: (id: number) =>
    generatePath(switchRoutes.characterDetails, { id })
})
