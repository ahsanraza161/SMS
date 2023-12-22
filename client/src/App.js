import React from 'react';
import SignIn from './components/Signinform/signin';
import Admin from './panels/admin/adminDashboard';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Signupform/signup';
import Dashboard from './panels/student/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/student" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
