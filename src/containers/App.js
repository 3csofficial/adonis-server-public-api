import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Article from "../components/Article";
import Dashboard from "../components/Dashboard";
import Clap from "../components/Clap";
import Sidebar from "../components/Sidebar";
import Burger from "../components/Hamburger";
import { fetchArticleDetails } from "../actions";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  aside {
    min-width: 35vh;
    display: flex;
    justify-content: flex-end;
  }
  main {
    flex: 1 0 350px;
    ${"" /* not responsive */} padding: 0 5rem;
  }
`;

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchArticleDetails();
  }
  render() {
    const {users, products} = this.props.data;
    console.log(this.props,'this.props')
    const countTotal = this.props.data.numberOfRecommends;
    return (
      <StyledApp>
        <aside className="aside">
          <Sidebar />
        </aside>
        <Burger />
        <main>
          {this.props.isLoadingData ? (
            "Loading . . ."
          ) : (
            <Dashboard
              users={users}
              products={products}
            />
          )}
        </main>
      </StyledApp>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchArticleDetails
  }
)(App);
