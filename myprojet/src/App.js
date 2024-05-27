import "./App.css";
import Add from "./components/add/Add";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Edit from "./components/edit/Edit";
import Users from "./components/users/Users";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit-user/:id" element={<Edit />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
