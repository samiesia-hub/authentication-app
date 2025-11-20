import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { session } = UserAuth();

  if (session === undefined) {
    return <p>loading...</p>;
  }

  return session ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
