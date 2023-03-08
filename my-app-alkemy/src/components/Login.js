import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'




function Login() {

  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      swAlert(<h2>Los campos no pueden estar vacios</h2>);
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      swAlert(<h2>Debes ingresar un correo electronico valido</h2>);
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert(<h2>Credenciales invalidas</h2>);
      return;
    }

    

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((response) => {
        swAlert(<h2>Te haz logueado correctamente!</h2>);
        const token = response.data.token;
        sessionStorage.setItem('token', token);
        navigate('./Listado')
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-3"> 
          <label htmlFor="exampleFormControlInput1" className="form-label ">Email address</label>
          <input type="text" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label ">Password</label>
          <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-success">Login</button>
    </form>
  </div>
  );
}

export default Login;
