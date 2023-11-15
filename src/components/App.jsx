import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Start } from '../pages/start/start';
import { Register } from '../pages/register/register';
import { Login } from '../pages/login/login';
import { PrivateRoute } from './routes/PrivatRoute';
import { Game } from '../pages/game/game';

const App = () => {
  return  (

    <Routes>
      <Route path="/" index element={<Start />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
       <Route
          path="/home"
        element={<PrivateRoute redirectTo="/login" component={<Home />} />}>
        <Route path="/home/:game" element={<Game />} />
        </Route>
    </Routes>)
}

export { App };
