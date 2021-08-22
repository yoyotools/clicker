import React, { useCallback, useState } from "react";

interface Props {
  name: string;
}

const ClickerBox = (props: Props) => {
  const [count, setCount] = useState(0);

  const countUp = useCallback(
    (event) => {
      setCount(count + 1);
    },
    [count]
  );

  return (
    <>
      <p onClick={countUp}>
        <h1>{props.name}</h1>
        <p>{count}</p>
      </p>
    </>
  );
};

export default ClickerBox;
