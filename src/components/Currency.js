import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-success ">
      Currency
      {
        <select
          className="alert-menu"
          name="Currency"
          id="Currency"
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option className="alert-item" value="$">
            $ Dollar
          </option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};
export default Currency;
