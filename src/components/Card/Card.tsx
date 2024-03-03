import './Card.css'
import useNavigations from '../../router/Navigation'
import Heart from '../Heart/Heart'

interface CardProps {
  key: string
  id: number
  name: string
  imagePath: string
  imageExtension: string
}

const Card = ({ name, imagePath, imageExtension, id }: CardProps) => {
  const { goToCharacterDetails } = useNavigations()

  const imageUlr = imagePath + '/portrait_xlarge.' + imageExtension

  return (
    <div className="card-container">
      <div className="card-image-container">
        <img
          src={imageUlr}
          className="card-image"
          alt="cardImage"
          onClick={() => goToCharacterDetails(id)}
        />
      </div>
      <div className="card-info">
        <div className="card-name">{name}</div>
        <Heart id={id} />
      </div>
    </div>
  )
}

export default Card
