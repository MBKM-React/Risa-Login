// import './App.css';
// import { ReactDOM } from 'react';
import React from "react";
// import Mhs from "./components/mahasiswa";


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

function LoginForm(){
    
}

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
  return <form>
  <h1>Selamat Datang Mahasiswa</h1>
  <div className="form-group">
    <label>NIM :</label>
    <input type="text" placeholder="Masukkan NIM Anda" required />
  </div>
  <div className="form-group">
    <label>Password :</label>
    <input type="password" placeholder="Masukkan Password Anda" required />
  </div>
</form>;
}

function Professional(props) {
  return <form>
  <h1>Selamat Datang Professional</h1>
  <div className="form-group">
    <label>Username :</label>
    <input type="email" placeholder="Masukkan username Anda" required />
  </div>
  <div className="form-group">
    <label>Password :</label>
    <input type="password" placeholder="Masukkan Password Anda" required />
  </div>
</form>;
}

function Login(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Mahasiswa />;
  }
  return <Professional />;
}

export default LoginControl;
