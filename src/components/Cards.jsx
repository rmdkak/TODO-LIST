import React from "react";
import "css/Cards.css";
import { Link } from "react-router-dom";

function Cards({ item, onDeleteHandler, onToggleHandler }) {
  return (
    <div className="cards" key={item.id}>
      <Link to={`/${item.id}`}>
        <div>상세보기</div>
      </Link>
      <div className="card-title">{item.title}</div>
      <div className="card-body">{item.body}</div>
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
