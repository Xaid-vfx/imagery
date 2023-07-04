import './App.css';
import Landing from './Pages/Landing/Landing';
import SignIn from './Pages/Login/login';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router, Routes
} from "react-router-dom";


function App() {
  return (

    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/" element={<Landing/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
