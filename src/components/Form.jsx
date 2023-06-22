import React from "react";
import { useState, useEffect, useRef } from "react";
import { newGoal } from "redux/modules/goal";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const titleRef = useRef("");
  const bodyRef = useRef("");

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "" || body === "") {
      if (title === "") titleRef.current.focus();
      else bodyRef.current.focus();
      return alert("제목과 내용을 전부 작성해 주세요!");
    }

    const newText = {
      id: Date.now(),
      title,
      body,
      isDone: false,
    };

    dispatch(newGoal(newText));
    setTitle("");
    setBody("");
  };

  return (
    <InputForm onSubmit={onSubmitHandler}>
      <InputBox>
        <label>제목</label>
        <InputArea
          type="text"
          id="title"
          onChange={titleChangeHandler}
          ref={titleRef}
          value={title}
        ></InputArea>
        <label>내용</label>
        <InputArea
          type="text"
          id="body"
          onChange={bodyChangeHandler}
          ref={bodyRef}
          value={body}
        ></InputArea>
      </InputBox>
      <SubmitBtn>추가하기</SubmitBtn>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #d2daff;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 1px 0px 2px #00000054;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const InputArea = styled.input`
  height: 70px;
  width: 200px;
  border: none;
  border-radius: 15px;
  padding: 5px 20px;
  font-size: 20px;
  outline: none;
  box-shadow: inset 2px 2px 3px #00000054;
`;

const SubmitBtn = styled.button`
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  margin: 50px;
  box-shadow: inset 2px 2px 3px #00000054;
  cursor: pointer;
`;

export default Form;
