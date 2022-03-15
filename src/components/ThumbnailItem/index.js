// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {imageDetails, onClickImage} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = imageDetails
    const onClickThumbnail = () => {
      onClickImage(id)
    }

    return (
      <li className="thumbnail" onClick={onClickThumbnail}>
        <button className="image-button" type="button">
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-image"
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
