import fullHeart from '../../shared/assets/full-heart.svg'
import emptyHeart from '../../shared/assets/empty-heart.svg'
import { useCharactersContext } from '../../shared/contexts/CharactersProvider'
import './Heart.css'
interface HeartProps {
  id: number
  width?: string
  height?: string
}
const Heart = ({ id, height, width }: HeartProps) => {
  const { favCharacters, addFav, deleteFav } = useCharactersContext()
  const isFav = favCharacters.includes(id)

  return (
    <img
      src={isFav ? fullHeart : emptyHeart}
      className="heart-logo"
      onClick={() => (isFav ? deleteFav(id) : addFav(id))}
      style={{ height, width }}
    />
  )
}
export default Heart
