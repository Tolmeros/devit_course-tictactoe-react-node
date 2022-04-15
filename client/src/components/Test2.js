import React, {useContext, useEffect} from 'react';
import Environment from "../context/Environment";

const Test2 = () => {
  const { environment, callback } = useContext(Environment);

  return (
    <div>
      {environment}
    </div>
  );
};

export default Test2;