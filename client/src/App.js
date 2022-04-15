import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from "./components/Button";
import Environment from "./context/Environment";

const App = ({environment}) => {
  const [state, setState] = useState(environment);

  return (
    <Environment.Provider value={{
      environment: state,
      callback: () => {
        setState(state + state)
      }
    }}
    >
      {environment === 'production' && (
        <Button
          className="some-button"
          onClick={(event) => {
            console.log('this is some button text')
          }}
        >
          Some button text
        </Button>
      )}

      <Button
        className="some-button222"
        onClick={(event) => {
          console.log('this is button 2332')
        }}
      >
        2323
      </Button>
    </Environment.Provider>
  );
};

App.propTypes = {
  environment: PropTypes.string
};

export default App;