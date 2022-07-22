import { useReducer, useState } from "react";
import { initialState,reducer } from "./reducer";

const UseReducerExample = () => {
//   const [dog, setDog] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

const [state, dispatch] = useReducer(reducer, initialState)
const {loading, error, dog}=state



  const fetchDog = () => {
    dispatch({type:"START"})
 
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch({type:"SUCCESS", payload:data.message})
        // setDog(data.message);
        // setLoading(false);
      })
      .catch(() => {
        dispatch({type:"FAIL", payload:"ERROR!! DATA CAN NOT BE FETCHED"})
        // setError("ERROR!! DATA CAN NOT BE FETCHED");
        // setLoading(false);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UseReducerExample;
