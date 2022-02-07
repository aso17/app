import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
const FormUser = () => {
  const [username, setUsername] = useState("");
  const [namaLengkap, setnamaLengkap] = useState("");
  const [password, setPassword] = useState("");
  const [foto, setFoto] = useState("");
  const history = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    e.target.reset();

    await axios.post("http://localhost:8080/Users", {
      username: username,
      nama: namaLengkap,
      pass: password,
      foto: foto,
    });
    const Toast = swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", swal.stopTimer);
        toast.addEventListener("mouseleave", swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Create users Success",
    });
    history("/users");
  };

  return (
    <div className="card p-2">
      <div className="card-header">
        <h1>Form Create User</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={saveUser}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />

              <label className="form-label">Nama Lengkap</label>
              <input type="text" value={namaLengkap} onChange={(e) => setnamaLengkap(e.target.value)} className="form-control" />

              <label className="form-label">password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
              <label className="form-label">Foto</label>
              <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)} className="form-control" />
              <button type="submit" className="btn btn-sm btn-secondary m-2">
                create
              </button>
              <Link to={"/"} className="btn btn-warning btn-sm">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUser;
