import React from 'react'
import PropTypes from 'prop-types'

const ImageCard = ({ classes, imageUrl }) => (
  <div className={ classes.imageContainer }>
    <div
      className={ classes.imageCardRoot }
      style={ { backgroundImage: `url(${ imageUrl })` } }
    />
  </div>
)

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default ImageCard
