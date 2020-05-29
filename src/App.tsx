import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";

import { Navbar } from "./components/Navbar";
import { DataPage } from "./pages/DataPage";
import { InfoPage } from "./pages/InfoPage";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Content>
          <Switch>
            <Route component={InfoPage} path={`${process.env.PUBLIC_URL}/about`} />
            <Route component={DataPage} path={`${process.env.PUBLIC_URL}/`} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
