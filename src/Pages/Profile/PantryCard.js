import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
  Menu,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { USER_REMOVE_PANTRY } from '../../APIFunctions/mutation';
import { useMutation } from 'react-apollo';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500]
  },
  card: {
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  delete: {
    color: red[800]
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
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


export default function PantryCard(props) {
  const {
    contents,
    userID
  } = props;
  const [userRemovePantry, { data }] = useMutation(USER_REMOVE_PANTRY)
  const { name } = props.pantry;
  const [settings, setSettings] = useState(null);
  const settingOpen = Boolean(settings);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const closeSettings = () => {
    setSettings(null);
  };
  const openSettings = (event) => {
    setSettings(event.currentTarget);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeletePantry = () => {
    userRemovePantry({
      variables: {
        userID,
        pantryID: props.pantry._id
      }
    })
  }

  return (
    <Card className={classes.card} elevation={10}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='Pantry'
            className={classes.avatar}
          >
            {name[0].toUpperCase()}
          </Avatar>
        }
        action={
          <>
            <IconButton
              aria-label='settings'
              onClick={openSettings}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={settings}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
              open={settingOpen}
              onClose={closeSettings}
            >
              <MenuItem
                className={classes.delete}
                onClick={() => {
                  closeSettings();
                  handleDeletePantry();
                  window.location.reload()
                  // Remove pantry from database
                  // Might want to pop up a modal
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </>
        }
        title={name}
      />
      <CardMedia
        className={classes.image}
        image={require('./fridge.jpg')} // INSERT IMAGE HERE
        title={name}
      />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Table className={classes.table} aria-label='pantry-items'>
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
          </Table>
        </CardContent>
      </Collapse>
    </Card>
  );
}
