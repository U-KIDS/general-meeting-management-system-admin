import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Login from './login/Login';
import UserList from './main/contents/user/userlist/UserList';
import UserDetail from './main/contents/user/userdetail/UserDetail';
import MeetingList from './main/contents/meeting/meetinglist/MeetingList';
import MeetingDetail from './main/contents/meeting/meetingdetail/MeetingDetail';
import AgendaDetail from './main/contents/meeting/agedadetail/AgendaDetail';

export default function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/' element={<Main />}>
          <Route path='/user' element={<UserList />} />
          <Route path='/user/detail' element={<UserDetail />} />
          <Route path='/meeting' element={<MeetingList />} />
          <Route path='/meeting/detail' element={<MeetingDetail />} />
          <Route path='/meeting/agenda/detail' element={<AgendaDetail />} />
        </Route>
    </Routes>
  );
}
