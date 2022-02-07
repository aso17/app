import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersList from "./componensUser/UsersList";
import FormUser from "./componensUser/FormUser";
import FromEditUser from "./componensUser/FromEditUser";
import Navbar from "./componenNavbar/Navbar";
import "./css/index.css";

function App() {
  return (
    <div className="container-fluid" id="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/users" exact element={<UsersList />} />
          <Route path="/createUser" element={<FormUser />} />
          <Route path="editUser/:id" element={<FromEditUser />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
