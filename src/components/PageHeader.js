import React from "react";
import { Link } from "react-router-dom";

import { Container } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";

let PageHeader = props => {
  return (
    <header className="page-header">
      <Container>
        <Menu>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/top">Top</Link>
          </Menu.Item>
        </Menu>
      </Container>
    </header>
  );
};

export default PageHeader;
