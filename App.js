import logo from './logo.svg';
import './App.css';
import Class1 from './classes/Class1';
import Class1State from './classes/Class1State';
import HandlerEvent from './classes/HandleEvent';
import ListRendering from './classes/ListRendering';
import UserList from './classes/UserList';
import UserCard from './classes/UserCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeSalary from './classes/EmployeeSalary';
import EmployeeComponent from './components/EmployeeComponent';
import NavbarComponent from './components/NavbarComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';



function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React</h1>
      <Class1/>
      <Class1State/>
      <HandlerEvent/>
      <ListRendering/>
      <EmployeeSalary/>
      <UserList/>
      <UserCard name="Jane Alom" email="janealom@gmail.com"/>  */}
      <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<EmployeeComponent />} />
          <Route path="/employees" element={<EmployeeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
