import { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const goalList = JSON.parse(localStorage.getItem("myGoal")) ?? [];
  const [text, setText] = useState(goalList);

  return (
    <Layout>
      <Header />
      <Form setText={setText} text={text} />
      <List setText={setText} text={text} />
    </Layout>
  );
}

export default App;
