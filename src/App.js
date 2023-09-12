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
import Redirect from './main/Redirect';
import AgendaCreate from './main/contents/meeting/agendacreate/AgendaCreate';
import AgendaVote from './main/contents/meeting/agendavote/AgendaVote';
import MeetingUpdate from './main/contents/meeting/meetingupdate/MeetingUpdate';
import AgendaOverview from './main/contents/overview/ageendaoverview/AgendaOverview';
import Overview from './main/contents/overview/Overview';
import MeetingOverview from './main/contents/overview/meetingoverview/MeetingOverview';
import AgendaDetailOverview from './main/contents/overview/agendadetailoverview/AgendaDetailOverview';

export default function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Redirect />} />
          
          <Route path='/user' element={<UserList />} />
          <Route path='/user/:studentNumber' element={<UserDetail />} />
          <Route path='/user/:studentNumber/update' element={<UserUpdate />} />
          
          <Route path='/meeting' element={<MeetingList />} />
          <Route path='/meeting/:meetingId' element={<MeetingDetail />} />
          <Route path='/meeting/create' element={<MeetingCreate />} />
          <Route path='/meeting/:meetingId/update' element={<MeetingUpdate />} />
          <Route path='/meeting/:meetingId/:agendaId/' element={<AgendaDetail />} />
          <Route path='/meeting/:meetingId/:agendaId/:imageIndex' element={<AgendaDetail />} />
          <Route path='/meeting/:meetingId/:agendaId/vote' element={<AgendaVote />} />
          <Route path='/meeting/:meetingId/agenda/create' element={<AgendaCreate />} />
        </Route>
        <Route path='/overview' element={<Overview />} >
          <Route path='/overview/meeting' element={<MeetingOverview />} />
          <Route path='/overview/meeting/:meetingId' element={<AgendaOverview />} />
          <Route path='/overview/meeting/:meetingId/:agendaId' element={<AgendaDetailOverview />} />
        </Route>
    </Routes>
  );
}