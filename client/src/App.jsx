import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import Signup from "./Signup"
import Login from "./Login";




function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Signup/>}></Route>
        <Route path="/home" element={< Users/>}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
        <Route path="/login" element={< Login/>}></Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
