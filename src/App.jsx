import { Link } from 'react-router-dom';

function App() {
  return (
    <div  className='flex'>
      <Link to="/dashboard" className="p-4 text-blue-500 hover:text-blue-700">
        dashboard
      </Link>

      <Link to="/login" className="p-4 text-blue-500 hover:text-blue-700">
        Log in
      </Link>
      <h1> hello </h1>

    </div>
  );
}

export default App;