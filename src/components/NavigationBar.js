import '../styles/NavigationBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleNavClick = e => {
    const param = encodeURIComponent(e.innerText);
    navigate(`/cake/:${param}`);
  };
  return (
    <div className="App-nav">
      <nav className="Nav-space" onClick={e => handleNavClick(e.target)}>
        <p className="nav-menu">전체</p>
        <p className="nav-menu">발렌타인데이</p>
        <p className="nav-menu">크리스마스</p>
        <p className="nav-menu">기념일/생일</p>
      </nav>
    </div>
  );
};

export default NavBar;
