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
    backgroundSize: 'contain',
    borderRadius: '25px',
    objectFit: 'contain'
  },
  commonTypography: {
    textAlign: 'center'
  }
}))
