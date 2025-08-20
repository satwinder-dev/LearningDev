import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

export default function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },[])

  const Authdata = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (Authdata ) {
      const employee = Authdata.employees.find((e)=>email == e.email && password == e.password)
      if (employee){
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem('loggedinUser',JSON.stringify({role:'employee'}))
      }
    } else {
      console.log("invalid");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* {!user ? <Login handleLogin={handleLogin} /> : ""} */}

        {user == "admin" ? (
          <AdminDashboard />
        ) : user == "employee" ? (
          <EmployeeDashboard data = {loggedInUserData} />
        ) : (
          <Login handleLogin={handleLogin} />
        )}
        {/* <EmployeeDashboard/> */}
        {/* <AdminDashboard/> */}
      </div>
    </div>
  );
}

// New-Item -ItemType Directory -Force -Path src\components\Auth, src\components\Dashboard, src\components\TaskList, src\assets, src\context, src\pages, src\utils; New-Item -ItemType File -Force -Path src\components\Auth\Login.jsx, src\components\Dashboard\AdminDashboard.jsx, src\components\Dashboard\EmployeeDashboard.jsx, src\components\TaskList\AcceptTask.jsx, src\components\TaskList\CompleteTask.jsx, src\components\TaskList\FailedTask.jsx, src\components\TaskList\NewTask.jsx
