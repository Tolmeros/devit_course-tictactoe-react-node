import React, {useCallback, useEffect} from 'react';
import {Navigate} from 'react-router-dom';

function Login({
    session,
    sessionLoginFail,
    sessionLoginSuccess,
    gameState,
    gameLoadingError,
    changeUserNameLocaly,
    makeLogin}) {
  const handleSubmit = useCallback((event) => {
    console.log('handleSubmit', event);
    makeLogin({userName: session.userName});
    //return false;
  }, [makeLogin, session]);

  const handleSubmitKeyboard = useCallback((event) => {
    if (event.key === 'Enter') {
      console.log('handleSubmit', event);
      makeLogin({userName: session.userName});
    }
  }, [makeLogin, session]);
  
  const handleChange = useCallback((event) => {
    //console.log('handleChange', event);
    console.log('handleChange');
    const userValue = event.target.value;
    console.log(userValue);
    
    changeUserNameLocaly(userValue);
  }, [changeUserNameLocaly]);

  useEffect(() => {
    gameState();
  }, [gameState]);

  //console.log(JSON.parse(localStorage.getItem("test")));
  //console.log(localStorage.getItem("test"));
  //console.log(localStorage.getItem("test2"));

  return (!sessionLoginSuccess)
    ? (
    <div className="Login">
      <h2>Login</h2>
      <h2>{session.userName}</h2>
      <h2>{session.token}</h2>

      <div>
        <label>
          User name:
          <input 
            type="text"
            name="name"
            value={session.userName}
            onChange={handleChange}
            onKeyUp={handleSubmitKeyboard}
          />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
    )
    : <Navigate to="/game" />
}

export default Login;
