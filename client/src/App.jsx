import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./components/signup";
import { Home } from "./components/home";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import ImageUpload from "./components/Imageupload";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/ImageUpload" element={<ImageUpload />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


