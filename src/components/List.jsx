import React from "react";
import Cards from "./Cards";
import "../css/List.css";

function List({ setText, text }) {
  //선택한 객체의 id값과 불일치하는 것들만 state에 남겨줌
  const onDeleteHandler = (id) => {
    const newTextList = text.filter((e) => e.id !== id);
    localStorage.setItem("myGoal", JSON.stringify(newTextList));
    setText(JSON.parse(localStorage.getItem("myGoal")));
  };
  //선택한 id와 일치한 객체의 속성에 접근해 isDone:value boolean 타입을 변경해줌
  const onToggleHandler = (id) => {
    const newText = text.map((obj) => {
      if (obj.id === id) {
        return { ...obj, isDone: !obj.isDone };
      }
      return { ...obj };
    });
    localStorage.setItem("myGoal", JSON.stringify(newText));
    setText(JSON.parse(localStorage.getItem("myGoal")));
  };

  return (
    <div className="card-list">
      <div className="list">
        <h2>Working..👨‍💼</h2>
        {text
          .filter((obj) => obj.isDone === false)
          .map((item) => {
            return (
              <Cards
                item={item}
                key={item.id}
                onDeleteHandler={onDeleteHandler}
                onToggleHandler={onToggleHandler}
              />
            );
          })}
      </div>
      <div className="list">
        <h2>Done!🙆‍♂️</h2>
        {text
          .filter((obj) => obj.isDone !== false)
          .map((item) => {
            return (
              <Cards
                item={item}
                key={item.id}
                onDeleteHandler={onDeleteHandler}
                onToggleHandler={onToggleHandler}
              />
            );
          })}
      </div>
    </div>
  );
}

export default List;
