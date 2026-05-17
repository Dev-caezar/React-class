import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const { name } = useContext(AppContext);
  console.log(name);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count > 0 ? count - 1 : count);
  };

  return (
    <div>
      <button onClick={increase}>Add</button>
      <h4>{count}</h4>
      <button onClick={decrease}>Reduce</button>
    </div>
  );
};

export default Home;
