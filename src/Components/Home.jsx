import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Add Actions Here
import { getData } from "../actions/sampleActions";

const Home = () => {
  const dispatch = useDispatch();

  // Redux State
  let data = useSelector((state) => state.data.data);

  React.useEffect(() => {}, [dispatch]);

  //Button Click Function
  const onClickData = () => {
    dispatch(getData());
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={onClickData}>Get Time And Date</button>
      {data === undefined ? null : <h1>{data.Date}</h1>}
    </div>
  );
};

export default Home;
