import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
