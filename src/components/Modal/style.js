import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  rootPaper: {
    height: 'fit-content',
    width: 'fit-content',
    borderRadius: '25%'
  },
  bookImageContainer: {
    height: '240px',
    width: '150px',
    margin: 'auto'
  },
  bookCardRoot: {
    height: 'inherit',
    width: 'inherit',
    backgroundSize: 'cover',
    borderRadius: '25px',
    objectFit: 'contain',
    position: 'relative'
  },
  commonTypography: {
    textAlign: 'center',
    marginTop: '2%'
  },
  flexer: {
    display: 'flex',
    marginTop: '5%'
  },
  buttonContainer: {
    marginTop: '5%',
    display: 'flex',
    padding: '10px'
  },
  continueReadingButton: {
    backgroundColor: '#00008B',
    color: 'white',
    marginLeft: '5px',
    borderRadius: '8px',
    textTransform: 'none'
  },
  closeButton: {
    right: 0,
    position: 'absolute'
  },
  closeTextButton: {
    textTransform: 'none'
  }
}))
