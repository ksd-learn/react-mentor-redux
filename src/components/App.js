import { Routes, Route} from "react-router-dom";
import { Loyaut } from './Loyaut';
import { HomePage } from '../pages/HomePage';
import { UsersPage } from '../pages/UsersPage';
import { UserDetalePage } from '../pages/UserDetalePage';
import { UsersAddPage } from '../pages/UsersAddPage';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Loyaut />}>
        <Route index element={<HomePage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='users/:id' element={<UserDetalePage />} />
        <Route path='users/add' element={<UsersAddPage />} />
      </Route>    
    </Routes>
  );
}
