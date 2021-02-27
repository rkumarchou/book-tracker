import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  bookCardContainerWeb: {
    height: '240px',
    width: '150px',
    marginBottom: '30%'
  },
  bookCardRoot: {
    height: 'inherit',
    width: 'inherit',
    backgroundSize: 'cover',
    borderRadius: '25px'
  },
  bookTitleTypography: {
    width: 'inherit',
    marginTop: '1.5%',
    maxWidth: 'inherit',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  readingProgress: {
    backgroundColor: 'black',
    borderRadius: '7px',
    width: '25%',
    height: '10%',
    position: 'absolute',
    margin: '6%',
    opacity: '60%',
    display: 'table'
  },
  readingProgressTypography: {
    color: 'white',
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center'
  },
  bookGenreContainer: {
    backgroundColor: 'black',
    borderRadius: '8px',
    width: '50%',
    maxWidth: '50%',
    height: '12%',
    position: 'absolute',
    margin: '6%',
    opacity: '75%',
    display: 'table',
    bottom: 0,
    right: 0
  },
  bookGenreTypography: {
    color: 'white',
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    marginLeft: '2px',
    marginRight: '2px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '80px'
  }
}))
