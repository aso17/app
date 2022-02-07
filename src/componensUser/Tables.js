import { Button } from "bootstrap";
import React from "react";
import "@fortawesome/fontawesome-free";
const handleClick = (idUsers) => {
  console.log(`You clicked me! ${idUsers}`);
};

export const columns = [
  {
    name: "idUsers",
    selector: "idUsers",
    sortable: true,
  },
  {
    name: "Username",
    selector: "username",
    sortable: true,
    // cell: (d) => (
    //   <a href="https://google.com" target="_blank" className="dlink">
    //     {d.director}
    //   </a>
    // ),
  },
  {
    name: "namaLengkap",
    selector: "namaLengkap",
    sortable: true,
    // cell: (d) => <span>{d.genres.join(", ")}</span>,
  },
  {
    name: "foto",
    selector: "foto",
    sortable: true,
  },
  {
    name: "Action",
    sortable: false,
    selector: "null",
    // cell: (d) => [<i key={d.title} onClick={handleClick.bind(this, d.title)} className="first fas fa-pen"></i>, <i onClick={handleClick.bind(this, d.title)} className="fas fa-trash-alt"></i>],
    cell: (d) => [
      <button key={d.idUsers} onClick={handleClick.bind(this, d.idUsers)} className="">
        <i className="first fas fa-pen"></i> edit
      </button>,
      // <button className="btn btn-sm btn-dark">delete</button>,
      <i className="far fa-edit">edit</i>,
    ],
  },
];
