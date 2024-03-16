import { Link } from 'react-router-dom';
import setting from '../assets/setting.png';
import arrowBack from '../assets/arrow.png';
import microphone from '../assets/microphone.png';
import './Navbar.css';

export default function MyNavbar() {
  const getDate = () => {
    const now = new Date();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  };
  return (
    <header>
      <nav>
        <div className="home">
          <Link to="/">
            <img src={arrowBack} alt="" />
          </Link>
          <span>{getDate()}</span>
        </div>
        <div className="left">
          <img src={microphone} alt="" />
          <img src={setting} alt="" />
        </div>
      </nav>
    </header>
  );
}
