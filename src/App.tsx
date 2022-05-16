import React, { Component } from "react";
import "./App.scss";
import { Header, Aside, Main, Footer, Working } from "./components";
import Grid from "@mui/material/Grid";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Grid container spacing={0}>
            <Grid item xs={12} md={3} xl={3}>
              <Aside />
            </Grid>
            <Grid item xs={12} md={9} xl={6}>
              <Main />
            </Grid>

            <Grid className="workingGrid" item lg={12} xl={3}>
              <Working />
            </Grid>
          </Grid>
          <div>
            <Grid container spacing={0}>
              <Grid item xl={3}></Grid>
              <Grid item md={12} xl={6}>
                <Footer />
              </Grid>
              <Grid item xl={3}></Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
