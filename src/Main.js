import React from "react";
import { Route } from "react-router-dom";

import Container from "./components/Container";
import HomePage from "./pages/Home";

let Main = () => {
  return (
    <div class="main" style={{ marginTop: "20px" }}>
      <Container>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/top' render={(() => "top page")}></Route>
      </Container>
    </div>
  );
};

export default Main;