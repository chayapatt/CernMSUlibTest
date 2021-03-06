import {useState, useEffect} from 'react';
import {Navigate} from 'react-router';
import './Login.css';

//Login.js makes user signin with correct username and password
function Login() {

  const [submitted, setSubmitted] = useState(false);
  const [uState, setUstate] = useState({value: ''});
  const [pState, setPstate] = useState({value: ''});

//update the state of username when typing
  const handleChangeU = (event) => {
    setUstate({value: event.target.value})
  }

//update the state of password when typing
  const handleChangeP = (event) => {
    setPstate({value: event.target.value})
  }

//check the credentials and takes user to home page if correct
  const handleSubmit = (event) => {
    if (uState.value == 'ct1353' && pState.value == 'cern1234') {
      setSubmitted(true)
      localStorage.setItem("name", uState.value);
      localStorage.setItem("isLoggedin", true);
    }
    else {
      alert('Incorrecrt username or password, try again!');
    }
  }
  if (submitted) {
    return <Navigate push to= {{  pathname: '/home'}} />
  }

  return (
    <form onSubmit= {handleSubmit}>
      <h1>LibGuides</h1>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required value={uState.value} onChange={handleChangeU}></input>
      <p>* Username is ct1353 *</p>
      <br></br>
      <label for="password">Password:</label>
      <input type="text" id="password" name="password" required value={pState.value} onChange={handleChangeP}></input>
      <p>* Password is cern1234 *</p>
      <br></br>
      <input type="submit" value="Login" className="loginBtn"></input>
    </form>
  );
}

export default Login
