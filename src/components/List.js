import React from "react";
import styled from "styled-components";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const StyledList = styled.div`
  h1 {
    font-weight: 700;
    font-size: 36px;
    color: #000000;
    margin: 0;
  }
  h4 {
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    margin: 0.5rem 0 4rem 0;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    color: #4a4a4a;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    minWidth: '450px !important',
    width: '450px !important',
    // paddingBottom: '200px',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const List = ({ data = [], name = "" }) => {
  const classes = useStyles();
  return (
    <StyledList>
      <Typography variant="h6">
        {name}
      </Typography>
      <Paper component="ul" className={classes.root}>
        {data.map((data) => {

          return (
            <li key={data.id}>
              <Chip
                label={name=='Products' ? data.title : data.username}
                className={classes.chip}
              />
            </li>
          );
        })}
      </Paper>
    </StyledList>
  );
};

export default List;
