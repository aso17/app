import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "../componensUser/UserList.css";

import { columns } from "./Tables";

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
  const data = Users;

  const tableData = {
    columns,
    data,
  };
  // console.log(columns);
  // console.log(data);
  return (
    <div className="card p-2 bg-light">
      <div className="card-header">
        <h4>Daftar Users</h4>
      </div>
      <div className="main ">
        <Link to={"/createUser"}>
          <button className="btn btn-sm btn-dark mt-2">Tambah Users</button>
        </Link>
        <DataTableExtensions {...tableData}>
          <DataTable columns={columns} data={data} noHeader defaultSortField="id" defaultSortAsc={true} pagination highlightOnHover dense />
        </DataTableExtensions>
      </div>
    </div>
  );
};

export default UsersList;
