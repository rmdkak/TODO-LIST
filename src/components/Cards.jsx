import React from "react";
import "../css/Cards.css";

function Cards({ item, onDeleteHandler, onToggleHandler }) {
  return (
    <div className="cards" key={item.id}>
      <div>
        <h2>{item.title}</h2>
        <div>{item.body}</div>
      </div>
      <div className="btn-box">
        <button onClick={() => onDeleteHandler(item.id)} className="delete-btn">
          삭제
        </button>
        <button
          onClick={() => onToggleHandler(item.id)}
          className="complete-btn"
        >
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Cards;
