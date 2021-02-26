import React from 'react'
import {
  AppBar, Toolbar, IconButton, Typography
} from '@material-ui/core'
import {
  Apps as AppsIcon, List as ListIcon, Search, Menu as MenuIcon
} from '@material-ui/icons'
import PropTypes from 'prop-types'

import useStyles from './style'

const TopBar = ({ handleDrawerToggle, setIsGridView }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position='fixed' className={ classes.appBar } style={ { backgroundColor: 'white' } }>
        <Toolbar>
          <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={ handleDrawerToggle }
          className={ classes.menuButton }
        >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap style={ { color: 'black' } }>
            Book Library
          </Typography>
          <IconButton
            aria-label='grid view'
            className={ classes.toolbarButtons }
            onClick={ () => setIsGridView(true) }
          >
            <AppsIcon/>
          </IconButton>
          <IconButton
            aria-label='list view'
            onClick={ () => setIsGridView(false) }
          >
            <ListIcon/>
          </IconButton>
          <IconButton>
            <Search />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

TopBar.defaultProps = {
  handleDrawerToggle: () => {},
  setIsGridView: () => {}
}

TopBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  setIsGridView: PropTypes.func.isRequired
}

export default TopBar
