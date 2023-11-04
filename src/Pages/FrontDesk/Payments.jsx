import CheckOutPanel from "../../Components/CheckOutPanel/CheckOutPanel";
import Nav from "./Nav"
import styles from '../../Styles/FrontDesk/payments.module.css';
import { Link } from "react-router-dom";
import { icon } from "../../External/design";

const Payments = () => {
  return (
    <section className="wrapper">
      <section className="dashMain" style={{ justifyContent: 'flex-start', gap: '0.8rem' }}>
        <Nav />
        <section className={styles.areasBox}>
          <header>
            <h3>Payments <sub></sub></h3>
          </header>

          <section className={styles.panel}>
            <section className={styles.left}>
              <div>
                {icon('payments')}
                <strong>Gh₵ 45,000</strong>
                <small>Pending Payments</small>
              </div>
              <div>
                {icon('person')}
                <strong>200</strong>
                <small>Guests Owing</small>
              </div>
            </section>
            <section className={styles.right}>

            </section>
          </section>

          <form className={styles.paymentSearch}>
          {icon('search')}
            <div className="searchBox">
              <input type="text" value="" placeholder="Guest" />
            </div>
            <div className="searchBox">
              <input type="number" value="" placeholder="Room" />
            </div>
            <div className="searchBox">
              <input type="number" value="" placeholder="Amount" />
            </div>
            <div className="searchBox">
            <s></s>
              <select>
                <option value="">All</option>
                <option value="">Pending</option>
                <option value="">Paid</option>
              </select>
            </div>
          </form>

          <section className={styles.areas}>
            {Array(20).fill().map((el) => (
              <Link>
                <p>
                  {icon('chair')}
                  <span>201</span>
                </p>
                <span className="cut">Kwame Agyei Kofi Bonsu Kwame Agyei Kofi Bonsu</span>
                <strong>Gh₵ 4,500</strong>
                <legend>24 : 50 : 15</legend>
              </Link>
            ))}
          </section>
        </section>
      </section>
      <CheckOutPanel props={{ scroll: true }} />
    </section>
  );
}

export default Payments;