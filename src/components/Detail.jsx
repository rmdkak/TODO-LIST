import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const goal = useSelector((state) => state.goal);
  const navigate = useNavigate();
  const params = useParams();

  const detailPage = goal.find((item) => item.id === parseInt(params.id));

  return (
    <Container>
      <DetailBox>
        <TopBox>
          <DetailID>ID: {detailPage.id}</DetailID>
          <Tape src="/tape3.png" alt="" />
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            <div>To do List</div>
            <TitleText>develop by react</TitleText>
          </Button>
        </TopBox>
        <MiddleBox>
          <Title>{detailPage.title}</Title>
          <Body>{detailPage.body}</Body>
        </MiddleBox>
      </DetailBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  background-color: #f4f6ff;
  width: 800px;
  gap: 50px;
  padding: 50px;
  box-shadow: 2px 2px 5px #00000054;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DetailID = styled.div`
  background-image: url("/tape1.png");
  background-size: cover;
  width: 183px;
  height: 53px;
`;

const Tape = styled.img`
  width: 172px;
  position: relative;
  top: -90px;
  transform: rotate(-2deg);
`;

const Button = styled.button`
  background-color: transparent;
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 110px;
  height: 50px;
  font-size: 20px;
  transition: scale 0.3s;
  &:hover {
    font-weight: bolder;
    scale: 1.1;
  }
`;

const TitleText = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;

const Title = styled.div`
  font-size: 50px;
  line-height: 55px;
  padding-bottom: 20px;
  border-bottom: 2px solid #d2daff;
`;

const Body = styled.div`
  font-size: 30px;
  line-height: 35px;
`;

export default Detail;
