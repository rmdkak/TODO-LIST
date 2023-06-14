import React from "react";
import Cards from "./Cards";
import "../css/List.css";

function List({ setText, text }) {
  //선택한 객체의 id값과 불일치하는 것들만 state에 남겨줌
  const onDeleteHandler = (id) => {
    const newTextList = text.filter((e) => e.id !== id);
    setText(newTextList);
  };
  //선택한 id와 일치한 객체의 속성에 접근해 isDone:value boolean 타입을 변경해줌
  const onToggleHandler = (id) => {
    const newText = text.map((obj) => {
      if (obj.id === id) {
        return { ...obj, isDone: !obj.isDone };
      }
      return { ...obj };
    });
    // //findIndex를 이용한 다른 방법
    // const index = text.findIndex((obj) => obj.id === id);
    // const newText = [
    //   ...text.slice(0, index),
    //   { ...text[index], isDone: !text[index].isDone },
    //   ...text.slice(index + 1, text.length),
    // ];
    setText(newText);
  };

  return (
    <div className="card-list">
      <h2>Working..👨‍💼</h2>
      <div className="list">
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
      <h2>Done!🙆‍♂️</h2>
      <div className="list">
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
