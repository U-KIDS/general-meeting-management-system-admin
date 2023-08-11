import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import Login from './login/Login';
import UserList from './main/contents/user/userlist/UserList';
import UserDetail from './main/contents/user/userdetail/UserDetail';
import MeetingList from './main/contents/meeting/meetinglist/MeetingList';
import MeetingDetail from './main/contents/meeting/meetingdetail/MeetingDetail';
import AgendaDetail from './main/contents/meeting/agedadetail/AgendaDetail';
import MeetingCreate from './main/contents/meeting/meetingcreate/MeetingCreate';
import UserUpdate from './main/contents/user/userupdate/UserUpdate';

export default function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/' element={<Main />}>
          <Route path='/user' element={<UserList />} />
          <Route path='/user/:studentNumber' element={<UserDetail />} />
          <Route path='/user/:studentNumber/update' element={<UserUpdate />} />
          <Route path='/meeting' element={<MeetingList />} />
          <Route path='/meeting/:meegtingId' element={<MeetingDetail />} />
          <Route path='/meeting/create' element={<MeetingCreate />} />
          <Route path='/meeting/:meetingId/:agendaId/' element={<AgendaDetail />} />
        </Route>
    </Routes>
  );
}