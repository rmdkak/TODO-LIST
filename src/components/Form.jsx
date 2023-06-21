import React from "react";
import "css/Form.css";
import { useDispatch, useSelector } from "react-redux";
import { addTitle, emptyTitle } from "redux/modules/title";
import { addBody, emptyBody } from "redux/modules/body";
import { newGoal } from "redux/modules/goal";

function Form() {
  const store = useSelector((state) => state);
  const title = store.title;
  const body = store.body;

  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    dispatch(addTitle(event.target.value));
  };

  const bodyChangeHandler = (event) => {
    dispatch(addBody(event.target.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.title === "" || body.body === "") return;

    const newText = {
      id: Date.now(),
      title: title.title,
      body: body.body,
      isDone: false,
    };

    dispatch(newGoal(newText));
    dispatch(emptyTitle());
    dispatch(emptyBody());
  };

  return (
    <form className="input-form" onSubmit={onSubmitHandler}>
      <div className="input-boxs">
        <label>제목</label>
        <input
          type="text"
          className="input-area"
          onChange={titleChangeHandler}
          value={title.title}
        ></input>
        <label>내용</label>
        <input
          type="text"
          className="input-area"
          onChange={bodyChangeHandler}
          value={body.body}
        ></input>
      </div>
      <button className="btn">추가하기</button>
    </form>
  );
}

export default React.memo(Form);
