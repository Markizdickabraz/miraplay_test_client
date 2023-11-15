import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Start } from '../pages/start/start';
import { Register } from '../pages/register/register';
import { Login } from '../pages/login/login';
import { PrivateRoute } from './routes/PrivatRoute';

const App = () => {
  return (

    <Routes>
      <Route path="/" index element={<Start />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<PrivateRoute redirectTo="/login" component={<Home />} />} />
    </Routes>
  )
};

export { App };
