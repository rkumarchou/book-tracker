import React from 'react'
import PropTypes from 'prop-types'

import { LinearProgress as LinearLoader } from '@material-ui/core'

const Loaders = ({ size, color, classes, thickness }) => {
  return <LinearLoader classes={ classes } color={ color } />
}

export default Loaders

Loaders.defaultProps = {
  size: 40,
  color: 'primary',
  classes: {},
  thickness: 3.6
}

Loaders.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.object,
  thickness: PropTypes.strings
}
