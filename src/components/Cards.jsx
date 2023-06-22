import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Cards({ item, onDeleteHandler, onToggleHandler }) {
  return (
    <>
      <Tape src="/tape2.png" alt="" />
      <Card key={item.id}>
        <STLink to={`/${item.id}`}>
          <Detail src="/detailIcon.png" alt="" />
        </STLink>
        <CardTitle>{item.title}</CardTitle>
        <CardBody>{item.body}</CardBody>
        <BtnBox>
          <DeleteBtn onClick={() => onDeleteHandler(item.id)}>삭제</DeleteBtn>
          <CompleteBtn onClick={() => onToggleHandler(item.id)}>
            {item.isDone ? "취소" : "완료"}
          </CompleteBtn>
        </BtnBox>
      </Card>
    </>
  );
}

const Tape = styled.img`
  width: 110px;
  position: relative;
  top: 29px;
  transform: rotate(-10deg);
`;

const STLink = styled(Link)`
  margin-left: 195px;
  margin-top: -10px;
`;

const Detail = styled.img`
  width: 30px;
  height: 30px;
  transition: scale 0.3s;
  &:hover {
    scale: 1.3;
  }
`;

const Card = styled.div`
  height: 220px;
  background-image: url("/lightpurple.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 220px;
  gap: 25px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const DeleteBtn = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  transition: scale 0.3s;
  &:hover {
    scale: 1.3;
  }
`;

const CompleteBtn = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  transition: scale 0.3s;
  &:hover {
    scale: 1.3;
  }
`;

const CardTitle = styled.div`
  overflow: hidden;
  font-size: xx-large;
  height: 35px;
  line-height: 35px;
`;

const CardBody = styled.div`
  overflow: hidden;
  height: 20px;
  line-height: 20px;
`;

export default Cards;
