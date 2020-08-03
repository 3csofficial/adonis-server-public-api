import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import List from './List';
import Sidebar from './Sidebar';

const StyledArticle = styled.div`
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

const Dashboard = ({ users = [],products = [] }) => {
  return (
    <StyledArticle>
      {users.length==undefined ? (
        "Inner Loading . . ."
        ) : (
          <div>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <List
                  data={users}
                  name={'Users'}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <List
                  data={products}
                  name={'Products'}
                />
              </Grid>
            </Grid>
          </div>
        )
      }
    </StyledArticle>
  );
};

export default Dashboard;
