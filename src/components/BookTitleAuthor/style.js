import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  titleTypography: {
    width: 'inherit',
    marginTop: '1.5%',
    maxWidth: 'inherit',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontWeight: 600
  },
  authorTypography: {
    fontWeight: 600
  }
}))
