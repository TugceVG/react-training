import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SiteRoutes from './SiteRoutes';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) ?? null);
  }, [])

  const handleLogin = () => {
    const user = { id: 1, name: "tugce" };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    navigate("/");
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes user={user} handleLogin={handleLogin} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
