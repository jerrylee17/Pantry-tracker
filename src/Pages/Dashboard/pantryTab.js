import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button, Hidden, IconButton, Tooltip
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import { green, purple } from '@material-ui/core/colors';
import clsx from 'clsx';
import { PANTRY_CONTENT_QUERY } from '../../APIFunctions/queries';
import { useQuery } from 'react-apollo';
import { FileCopyOutlined } from '@material-ui/icons';
import { refreshPantry } from '../../APIFunctions/RefreshPantry';

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
  },
  toolTipFontSize: {
    fontSize: 12
  },
  toolTipCopied: {
    backgroundColor: green[600],
    color: theme.palette.getContrastText(green[600])
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
  const pantryID = props._id;
  const [copyID, setCopyID] = useState(false)
  const { name, handlePantryLoad } = props;
  const { data, loading, error, refetch } = useQuery(PANTRY_CONTENT_QUERY,
    {
      variables: { pantryID }
    },
    {
      refetchOnWindowFocus: false,
      enabled: false
    }
  );

  const contents = data && data.pantryContentsOne ? data.pantryContentsOne.contents : [];

  useEffect(() => {
    refreshPantry({ pantryID, callback: () => refetch({ pantryID }) });
    handlePantryLoad(name, contents.length);
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


  const copyPantryID = async () => {
    // Select text
    const idField = document.createElement('textarea');
    idField.value = pantryID;
    document.body.appendChild(idField);
    idField.select();
    document.execCommand('copy');
    document.body.removeChild(idField);
    await document.getElementById('copy-pantry-id')
    setCopyID(true)
  }

  return (
    <>
      <h2 className={classes.title}>
        {name}
        <Tooltip
          classes={{ tooltip: clsx(classes.toolTipFontSize, copyID ? classes.toolTipCopied : '') }}
          id='copy-pantry-id'
          title={copyID ? 'ID copied to clipboard!' : 'Copy pantry ID'}
          placement='top'
          onClick={copyPantryID}
          onClose={() => {
            setTimeout(() => {
              setCopyID(false)
            }, 100)
          }}
          disableFocusListener
          disableTouchListener
        >
          <IconButton>
            <FileCopyOutlined />
          </IconButton>
        </Tooltip>
      </h2>
      <Button
        className={clsx(
          classes.refreshButton,
          classes.refreshButtonPosition
        )}
        onClick={async () => {
          // await refreshPantry({ pantryID });
          await refetch({ pantryID });
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
          <h3>You have no items!</h3>
        )}
    </>
  );
}
