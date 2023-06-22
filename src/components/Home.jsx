import Layout from "components/Layout";
import Header from "components/Header";
import Form from "components/Form";
import List from "components/List";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

function Home() {
  const goal = useSelector((state) => state.goal);
  console.log(goal);

  useEffect(() => {
    localStorage.setItem("myGoal", JSON.stringify(goal));
  }, [goal]);

  return (
    <Layout>
      <Header />
      <STcontainer>
        <Form />
        <List />
      </STcontainer>
    </Layout>
  );
}

const STcontainer = styled.div`
  display: grid;
  grid-template-columns: 450px 1fr;
  border: 1px solid transparent;
  border-radius: 50px;
  background-color: #f4f6ff;
  box-shadow: 3px 3px 5px #00000054;
`;

export default Home;
