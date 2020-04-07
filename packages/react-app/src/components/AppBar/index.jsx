import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import RouteContext from '../../routes/RouteContext';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    // height: '100%',
    // position: 'absolute',
    // pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const { urlSearchParam, setUrlSearchParam } = useContext(RouteContext);
  const [searchQuery, setSearchQuery] = React.useState(urlSearchParam);

  const history = useHistory();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.search}>
            <InputBase
              placeholder="Nunca dejes de buscar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.searchIcon}>
            <IconButton
              onClick={() => {
                if (searchQuery !== urlSearchParam) {
                  history.push(`/items?search=${searchQuery}`);
                  setUrlSearchParam(searchQuery);
                }
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>
          {/* <div className={classes.grow} /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
