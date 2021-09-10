const Prof = (props) => {
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
    {/* <div className="Button">
    <Button >Log in</Button>{''}
    </div> */}
  </form>;
}

export default Prof;
