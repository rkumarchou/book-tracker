import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 260

export default makeStyles((theme) => ({
  appBar: {
    [ theme.breakpoints.up('sm') ]: {
      width: `calc(100% - ${ drawerWidth }px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [ theme.breakpoints.up('sm') ]: {
      display: 'none'
    }
  },
  toolbarButtons: {
    marginLeft: 'auto'
  }
}))
