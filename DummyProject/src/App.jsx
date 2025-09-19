import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import AppOne from "./components/AppOne";
import AppTwo from "./components/AppTwo";
import AppThree from "./components/AppThree";
import AppFour from "./components/AppFour";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Peoples from "./components/Peoples";
import CustopApi from "./components/CustopApi";
import EditUser from "./components/EditUser";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/peoples" element={<Peoples />} />

        <Route path="/project" element={<Project />}>
          <Route path="appone" element={<AppOne />} />
          <Route path="apptwo" element={<AppTwo />} />
          <Route path="appthree" element={<AppThree />} />
          <Route path="appfour" element={<AppFour />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/customapi" element={<CustopApi />}>
          <Route path=":id" element={<EditUser />} />
        </Route>

        <Route path="/user" element={<Users />}>
          <Route path=":color" element={<UserDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
