import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Test1 from "./Test1";

const Button = ({children, onClick, className}) => {
  useEffect(() => {

  }, []);

  let [state, setState] = useState(0);

  const handleClick = useCallback((e) => {
    setState((prevState) => {
      return prevState + 1;
    })

    onClick(e);
  }, [onClick]);

  const someObject = useMemo(() => {
    return {
      a: 3,
      b: 4
    }
  }, []);

  return (
    <button className={className} onClick={handleClick} >
      <span>{children} {state}</span>
      {/*{state % 2 === 0 && <Test1/>}*/}
      <Test1/>
    </button>
  );
};

export default Button;