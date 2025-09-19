import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

export default function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser =localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])


  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
       localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (userData ) {
      const employee = userData.find((e)=>email == e.email && password == e.password)
      if (employee){
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' , data:employee}))
      }
    } else {
      console.log("invalid");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4">
        {user == "admin" ? (
          <AdminDashboard changeUser={setUser} />
        ) : user == "employee" ? (
          <EmployeeDashboard data = {loggedInUserData} changeUser={setUser}/>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

// New-Item -ItemType Directory -Force -Path src\components\Auth, src\components\Dashboard, src\components\TaskList, src\assets, src\context, src\pages, src\utils; New-Item -ItemType File -Force -Path src\components\Auth\Login.jsx, src\components\Dashboard\AdminDashboard.jsx, src\components\Dashboard\EmployeeDashboard.jsx, src\components\TaskList\AcceptTask.jsx, src\components\TaskList\CompleteTask.jsx, src\components\TaskList\FailedTask.jsx, src\components\TaskList\NewTask.jsx