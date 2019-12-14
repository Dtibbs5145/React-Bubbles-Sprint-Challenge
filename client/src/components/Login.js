import React, { useState } from "react";
import { AxiosWAuth } from "../Auth/AxiosWAuth";

const Login = (props) => {
    const [login, setLogin] = useState({
      username: '',
      password: ''
    })

 const handleChange = e => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWAuth()
      .post(`http://localhost:5000/api/login`, login)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/colors');
      })
      .catch(err => console.log({err}));

      setLogin({username: '', password: ''})
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            value={login.username}
            onChange={handleChange}
            />
          <input
            type='password'
            name='password'
            value={login.password}
            onChange={handleChange}
            />
            <button>Login</button>
        </form>
      </div>
    )};

// when you have handled the token, navigate to the BubblePage route
export default Login;
