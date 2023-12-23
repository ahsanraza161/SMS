import React from 'react';
import SignIn from './components/Signinform/signin';
import Admin from './panels/admin/adminDashboard';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Signupform/signup';
import Dashboard from './panels/student/dashboard';
import AddTeacher from './components/AddteacherForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/student" element={<Dashboard />}></Route>
        <Route path="/add_teacher" element={<AddTeacher />}></Route>
      </Routes>
    </div>
  );
}

export default App;
