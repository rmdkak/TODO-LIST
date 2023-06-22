import React from "react";

import { styled } from "styled-components";

function Header() {
  return (
    <Head>
      <MainTitle>To Do List</MainTitle>
      <SubTitle>develop by React</SubTitle>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
`;

const MainTitle = styled.h1`
  font-size: 50px;
  margin: 10px 0;
`;

const SubTitle = styled.div`
  letter-spacing: 6px;
`;

export default Header;
