import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Templates from './pages/templates/index';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<ProtectedRoute><Home /></ProtectedRoute>}/>
            <Route path = '/home' element = {<ProtectedRoute><Home /></ProtectedRoute>}/>
            <Route path = '/profile' element = {<ProtectedRoute><Profile /></ProtectedRoute>}/>
            <Route path = '/templates/:id' element = {<ProtectedRoute><Templates /></ProtectedRoute>}/>
                <Route path = '/login' element = {<Login/>}/>
                <Route path = '/register' element = {<Register/>}/>
                
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("ppcm-resume-users")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}