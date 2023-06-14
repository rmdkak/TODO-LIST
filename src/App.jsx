import { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [text, setText] = useState([
    {
      id: 0,
      title: "리액트 화이팅",
      body: "열심히 공부 해보자",
      isDone: true,
    },
    {
      id: 1,
      title: "리액트 화이팅",
      body: "열심히 공부 해보자",
      isDone: false,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form setText={setText} text={text} />
      <List setText={setText} text={text} />
    </Layout>
  );
}

export default App;
