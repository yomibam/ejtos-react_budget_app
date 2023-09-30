import React, { useContext } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <AiFillPlusCircle
          size="2.5rem"
          color="green"
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </AiFillPlusCircle>
      </td>
      <td>
        <AiFillMinusCircle
          size="2.5em"
          color="red"
          onClick={handleDeleteExpense}
        ></AiFillMinusCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;
