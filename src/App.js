import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Login from './login/Login';
import UserList from './main/contents/user/userlist/UserList';
import UserDetail from './main/contents/user/userdetail/UserDetail';

export default function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/' element={<Main />}>
          <Route path='/user' element={<UserList />} />
          <Route path='/user/detail' element={<UserDetail />} />
        </Route>
    </Routes>
  );
}
