import './Comic.css'
interface CardProps {
  key: string
  title: string
  imagePath: string
  imageExtension: string
  year: string
}
const Comic = ({ title, imageExtension, imagePath, year }: CardProps) => {
  const imageUlr = imagePath + '/portrait_xlarge.' + imageExtension

  return (
    <div className="comic-container">
      <img src={imageUlr} className="comic-image" alt="cardImage" />
      <div className="comic-title">{title}</div>
      <div className="comic-year">{year}</div>
    </div>
  )
}

export default Comic
