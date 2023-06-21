import Layout from "components/Layout";
import Header from "components/Header";
import Form from "components/Form";
import List from "components/List";
import "css/Home.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const store = useSelector((state) => state);
  const goal = store.goal;
  console.log(goal);
  useEffect(() => {
    localStorage.setItem("myGoal", JSON.stringify(goal));
  }, [goal]);

  return (
    <Layout>
      <Header />
      <div className="div-container">
        <Form />
        <List />
      </div>
    </Layout>
  );
}

export default Home;
