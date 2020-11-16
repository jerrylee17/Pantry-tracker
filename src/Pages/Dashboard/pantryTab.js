import React, { useEffect } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button, Hidden
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import { purple } from '@material-ui/core/colors';
import clsx from 'clsx';
import { PANTRY_CONTENT_QUERY } from '../../APIFunctions/queries'
import { useQuery } from 'react-apollo';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center'
  },
  table: {
    width: '80%',
    textAlign: 'center',
    margin: 'auto'
  },
  refreshButton: {
    color: theme.palette.getContrastText(purple[200]),
    backgroundColor: purple[200],
    '&:hover': {
      color: theme.palette.getContrastText(purple[600]),
      backgroundColor: purple[600],
    }
  },
  refreshButtonPosition: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '5vh',
      right: '8vw',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '2vh'
    }
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default function PantryTab(props) {
  const classes = useStyles();
  const pantryID = props._id
  const { name, handlePantryLoad } = props
  const { data, loading, error } = useQuery(PANTRY_CONTENT_QUERY, {
    variables: { pantryID }
  })

  const contents = data && data.pantryContentsOne ? data.pantryContentsOne.contents : [];

  useEffect(() => {
    handlePantryLoad(name, contents.length)
    // eslint-disable-next-line
  }, [name, contents.length])

  if (error) {
    return (<>
      Error
    </>);
  }
  if (loading) {
    return (<>
      Loading
    </>);
  }


  return (
    <>
      <h2 className={classes.title}>{name}</h2>
      <Button
        className={clsx(
          classes.refreshButton,
          classes.refreshButtonPosition
        )}
        onClick={() => {
          // refresh pantry
        }}
      >
        <Hidden mdDown>
          Refresh pantry
        </Hidden>
        <RefreshIcon />
      </Button>
      {contents.length ? (<Table className={classes.table} aria-label='pantry-items'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align='right'>Quantity</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {contents.map((item, index) => (
            <StyledTableRow>
              <StyledTableCell>{item.name}</StyledTableCell>
              <StyledTableCell align='right'>{item.count}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>) : (
          <h2>You have no items!</h2>
        )}
    </>
  );
}
