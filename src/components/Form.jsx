import React from "react";
import { useState } from "react";
import "../css/Form.css";

function Form({ setText, text }) {
  //input.value를 담아줄 state
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //input.value를 가져와 state에 담아줌
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };
  //input의 state들을 새 객체에 담아 text state에 합쳐줌
  //핸들러 이벤트 발생 시 input 내용 초기화
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "" || body === "") return;
    const dateNow = Date.now();
    const newText = {
      id: dateNow,
      title,
      body,
      isDone: false,
    };
    localStorage.setItem("myGoal", JSON.stringify([...text, newText]));
    setText(JSON.parse(localStorage.getItem("myGoal")));
    setTitle("");
    setBody("");
  };

  return (
    <form className="input-form" onSubmit={onSubmitHandler}>
      <div className="input-boxs">
        <label>제목</label>
        <input
          type="text"
          className="input-area"
          onChange={titleChangeHandler}
          value={title}
        ></input>
        <label>내용</label>
        <input
          type="text"
          className="input-area"
          onChange={bodyChangeHandler}
          value={body}
        ></input>
      </div>
      <button className="btn">추가하기</button>
    </form>
  );
}

export default Form;
