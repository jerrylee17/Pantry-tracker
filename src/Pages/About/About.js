import React from 'react';
import { aboutData } from './About-data';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return true;
  });
  return images;
}
var images = importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/));
console.log(images);

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  description: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
  memberPaper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(448px, max-content))',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      width: theme.spacing(40),
      height: theme.spacing(40),
      textAlign: 'center',
    },
  },
}))

export default function About(props) {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.header}>About</h1>
      <div className={classes.description}>
        {aboutData.projectDescription}
      </div>
      <div className={classes.memberPaper}>
        {aboutData.members.map((member, index) => (
          <Paper elevation={3}>
            <img
              src={images[member.picture]}
              alt={member.name}
            />
            <h4>{member.name}</h4>
            {member.description}
          </Paper>
        ))}
      </div>
    </>
  );
}

