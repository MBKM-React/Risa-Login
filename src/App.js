// import './App.css';
// import { ReactDOM } from 'react';
import React from "react";
// import Mhs from "./components/mahasiswa";
// import Button from './atom/button'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Mhs from "./components/mahasiswa";
import Prof from "./components/prof";


function LoginMhs(props) {
  return (
    <button onClick={props.onClick}>
      Login As Mahasiswa
    </button>
  );
}

function LoginProf(props) {
  return (
    <button onClick={props.onClick}>
      Login As Professional
    </button>
  );
}

// function LoginForm(){
    
// }

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.prof = this.prof.bind(this);
    this.stud = this.stud.bind(this);
    this.state = {isLoggedIn: false};
  }

  prof() {
    this.setState({isLoggedIn: true});
  }

  stud() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LoginProf onClick={this.stud} />;
    } else {
      button = <LoginMhs onClick={this.prof} />;
    }

    return (
      <div>
        <Login isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Mahasiswa(props) {
  return <Mhs></Mhs>
}

function Professional(props) {
  return <Prof></Prof>
}

function Login(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Mahasiswa />;
  }
  return <Professional />;
}

export default LoginControl;
