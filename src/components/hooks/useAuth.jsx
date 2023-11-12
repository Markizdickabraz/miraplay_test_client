import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectAccessToken,
  emailUser,
} from '../../redux/authorization/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, email } =
    useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);

  const resendEmail = useSelector(emailUser);

  return {
    isRefreshing,
    isLoggedIn,
    name,
    email,
    accessToken,
    resendEmail,
  };
};
