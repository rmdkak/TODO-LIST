import React from "react";
import Cards from "components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { deleteGoal, ChangeBooleanGoal } from "redux/modules/goal";
import { styled } from "styled-components";

function List() {
  const goal = useSelector((state) => state.goal);

  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    dispatch(deleteGoal(id));
  };

  const onToggleHandler = (id) => {
    dispatch(ChangeBooleanGoal(id));
  };

  return (
    <STCardList>
      <STList>
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
      </STList>
      <STList>
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
      </STList>
    </STCardList>
  );
}

const STCardList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

const STList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

export default List;
