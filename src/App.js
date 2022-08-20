import { Route, Routes } from "react-router-dom";
import "./App.css";
import Adminpanel from "./Components/Admin-panel/Admin-panel";
import Login from "./Components/LogIn/LogIn";
import Navbarcomponent from "./Components/Nav/Nav";
import PrivateComponent from "./Components/PrivateComponent.js/PrivateComponent";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      {/* Joy maa tara */}
      <Navbarcomponent />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Adminpanel />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
