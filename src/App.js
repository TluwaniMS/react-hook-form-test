import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeView from "./components/home-view/HomeView";
import LoginForm from "./components/login-form/LoginForm";
import DoctorCreationForm from "./components/doctor-creation-form/DoctorCreationForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/doctor-creation-form" element={<DoctorCreationForm />} />
      </Routes>
    </div>
  );
}

export default App;
