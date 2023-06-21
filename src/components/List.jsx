import React from "react";
import Cards from "components/Cards";
import "css/List.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteGoal, ChangeBooleanGoal } from "redux/modules/goal";

function List() {
  const store = useSelector((state) => state);
  const goal = store.goal;

  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    const newTextList = goal.filter((e) => e.id !== id);
    dispatch(deleteGoal(newTextList));
  };

  const onToggleHandler = (id) => {
    const newText = goal.map((obj) => {
      if (obj.id === id) {
        return { ...obj, isDone: !obj.isDone };
      }
      return { ...obj };
    });
    dispatch(ChangeBooleanGoal(newText));
  };

  return (
    <section className="card-list">
      <div className="list">
        <h2>Working..👨‍💼</h2>
        {goal
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
        {goal
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
    </section>
  );
}

export default List;
