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
        <div className='alert alert-tertiary'> Currency {
                    <select name='Currency'id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
                    <option style={{color:'black'}} value="£">$ Dollar</option>
                    <option style={{color:'black'}} value="$">£ Pound</option>
                    <option style={{color:'black'}} value="€">€ Euro</option>
                    <option style={{color:'black'}} value="₹">₹ Ruppee</option>
                </select>	
        }
        </div>
    );
};

export default Currency;