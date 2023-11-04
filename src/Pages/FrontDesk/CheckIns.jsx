import CheckOutPanel from "../../Components/CheckOutPanel/CheckOutPanel";
import { icon } from "../../External/design";
import Nav from "./Nav";
import styles from '../../Styles/FrontDesk/checkIns.module.css';
import { Link } from "react-router-dom";

const CheckIns = () => {
  return (
    <section className="wrapper">
      <section className="dashMain" style={{justifyContent : 'flex-start', gap: '0.8rem'}}>
        <Nav />
        <section className={`${styles.checkInBox} box`} style={{ gap: '1rem' }}>
          <h3>Check Ins [50]<sub></sub></h3>
          <div className='searchBox'>
            <input type="" name="" value="" />
            {icon('search')}
          </div>
          <div style={{ height: 'auto' }} className={`${styles.checkIns} boxLis`}>
            <Link className="boxLi" style={{ background: 'var(--dark)', color:'white' }}>
              <sub></sub>
              <p>
                <span className='cut'>{'Guest'}</span>
                <span>
                  {icon('chair')}
                  <small>{'Room'}</small>
                </span>
              </p>
              <p>
                <small>From</small>
                <small>To</small>
              </p>
              <legend>{'Time Left'}</legend>
              <article className={styles.payment}>
                <h6>Total</h6>
                <h6 style={{ color: 'var(--pass)' }}> {icon('payments')} ₵ Paid</h6>
                <h6 style={{ color: 'var(--fail)' }}> ₵ Left</h6>
              </article>
            </Link>
            {['Kwadwo Nkansah', 'paul Arthur', 'Mali Ray', 'Paul Wall', 'Knighentgale peterson', 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el, i) => (
              <Link key={i} className="boxLi">
                <sub style={{ background: 'var(--pass)' }}></sub>
                <p>
                  <span className='cut'>{el}</span>
                  <span>
                    {icon('chair')}
                    <small>101</small>
                  </span>
                </p>
                <p>
                  <small>23rd November, 2023</small>
                  <small>25th November, 2023</small>
                </p>
                <legend>{'23:10:05'}</legend>
                <article className={styles.payment}>
                  <h6>₵ 3,500</h6>
                  <h6 style={{ color: 'var(--pass)' }}> {icon('payments')} ₵ 3,500</h6>
                  <h6 style={{ color: 'var(--fail)' }}> ₵ 3,500</h6>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </section>
      <CheckOutPanel props={{ scroll: false }} />
    </section >
  );
}

export default CheckIns;