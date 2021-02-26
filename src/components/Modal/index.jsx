import React from 'react'
import { Dialog, IconButton, Typography, Button } from '@material-ui/core'
import { HighlightOff } from '@material-ui/icons'
import { PropTypes } from 'prop-types'

import useStyles from './style'

const ModalDialog = ({
  open,
  handleClose,
  modalData
}) => {
  const { bookTitle, bookAuthor, bookImageUrl, description } = modalData
  const classes = useStyles()
  return (
    <>
      <Dialog onClose={ handleClose } aria-labelledby='simple-dialog-title' open={ open }>
        <div className={ classes.rootPaper }>
          <IconButton onClick={ () => handleClose() } style={ { right: 0, position: 'absolute' } }>
            <HighlightOff/>
          </IconButton>
          <div style={ { display: 'flex', marginTop: '5%' } }>
            <div className={ classes.bookImageContainer }>
              <div
              className={ classes.bookCardRoot }
              style={ { backgroundImage: `url(${ bookImageUrl })`, position: 'relative' } }
            />
            </div>
          </div>
          <div>
            <Typography
             variant='h6'
             style={ { marginTop: '2%' } }
             className={ classes.commonTypography }
            >{ bookTitle }</Typography>
            <Typography color='textSecondary' noWrap className={ classes.commonTypography }>{ bookAuthor }</Typography>
            <Typography
              style={ { padding: '15px' } }
              className={ classes.commonTypography }
            >
              { description }
            </Typography>
          </div>
          <div style={ { marginTop: '5%', display: 'flex', padding: '10px' } }>
            <div style={ { margin: 'auto' } }>
              <Button
                onClick={ () => handleClose() }
                style={ { textTransform: 'none' } }
              >
                Close
              </Button>
              <Button style={ {
                backgroundColor: '#00008B',
                color: 'white',
                marginLeft: '5px',
                borderRadius: '8px',
                textTransform: 'none'
              } }
              onClick={ () => handleClose() }
              >
                Continue Reading
              </Button>
            </div>

          </div>
        </div>
      </Dialog>
    </>
  )
}

ModalDialog.defaultProps = {
  open: false,
  handleClose: () => {},
  modalData: null
}

ModalDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  modalData: PropTypes.objectOf(PropTypes.string)
}

export default ModalDialog
