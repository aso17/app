import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UsersList = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const history = useNavigate();
  const getUsers = async () => {
    const users = await axios.get("http://localhost:8080/Users");
    setUsers(users.data);
  };

  function refreshPage() {
    window.location.reload(true);
  }
  const deleteUser = async (id) => {
    axios.delete(`http://localhost:8080/Users/${id}`);
  };
  const hapus = (id) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      // timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        Toast.fire("Deleted!", "Your file has been deleted.", "success");
        setTimeout(function () {
          refreshPage();
        }, 1000);
      }
    });
  };

  return (
    <div className="row pt-3 d-flex justify-content-center">
      <div className="col-md-11">
        <div className="card p-2 ">
          <div className="card-header">
            <h1>Daftar Users</h1>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive-lg">
                <Link to="/createUser" className="btn btn-sm btn-primary m-1 rounded-1">
                  Create
                </Link>
                <table className="table table-border" border="1">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Username</th>
                      <th scope="col">Nama Lengkap</th>
                      <th scope="col">img</th>
                      <th className="text-center">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Users.map((user, index) => (
                      <tr key={user.idUsers}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.username}</td>
                        <td>{user.namaLengkap}</td>
                        <td>{user.foto}</td>
                        <td className="text-center">
                          <button
                            onClick={() => {
                              hapus(user.idUsers);
                            }}
                            className="btn btn-danger btn-sm  me-2  rounded-pill"
                          >
                            delete
                          </button>
                          <Link to={`/detail/${user.idUsers}`} className="btn btn-secondary btn-sm  me-2  rounded-pill">
                            detail
                          </Link>
                          <Link to={`/editUser/${user.idUsers}`} className="btn btn-success btn-sm  me-2  rounded-pill">
                            update
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
