import { Link } from 'react-router-dom';
import { icon } from '../../External/design';
import styles from '../../Styles/FrontDesk/dashboard.module.css';
import { useState } from 'react';

const Nav = () => {
  const [navToggled, setNavToggled] = useState(false);

  const toggleNav =()=>{
    navToggled ? setNavToggled(false) : setNavToggled(true);
  }

  return (
    <section className={
      window.innerWidth > 850 ? "mainNav" :
      navToggled ? "mainNav change" : 
      "mainNav"
    }>
      <sup onClick={toggleNav}>{icon('sort')}</sup>
      <nav>
        <Link to={'/frontDesk'}>Overview</Link>
        <Link to={'/frontDesk/checkIns'}>Check Ins</Link>
        <Link to={'/frontDesk/payments'} >Payments</Link>
        <Link>Rooms</Link>
        <Link>Events</Link>
        <Link>{icon('notifications')} <legend>10</legend></Link>
      </nav>
    </section>
  );
}

export default Nav;