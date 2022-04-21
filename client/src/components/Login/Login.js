import React, {useCallback} from 'react';

function Login({session, changeUserNameLocaly}) {
  const handleSubmit = useCallback((event) => {
    console.log('handleSubmit', event);
    return false;
  }, []);
  
  const handleChange = useCallback((event) => {
    //console.log('handleChange', event);
    console.log('handleChange');
    const userValue = event.target.value;
    console.log(userValue);
    
    changeUserNameLocaly(userValue);
  }, [changeUserNameLocaly]);

  //console.log(JSON.parse(localStorage.getItem("test")));
  //console.log(localStorage.getItem("test"));
  //console.log(localStorage.getItem("test2"));
  return (
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
          />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;
