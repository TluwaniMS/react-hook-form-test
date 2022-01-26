import "./App.css";
import { Route, Routes } from "react-router-dom";
import SuccessDisplay from "./components/success-display/SuccessDisplay";
import LoginForm from "./components/login-form/LoginForm";
import ErrorDisplay from "./components/error-display/ErrorDisplay";
import DoctorCreationForm from "./components/doctor-creation-form/DoctorCreationForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/doctor-creation-form" element={<DoctorCreationForm />} />
        <Route path="/success-view" element={<SuccessDisplay />} />
        <Route path="/error-view" element={<ErrorDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
