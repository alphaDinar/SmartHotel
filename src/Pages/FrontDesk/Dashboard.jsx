import { useEffect, useState } from 'react';
import { icon } from '../../External/design';
import styles from '../../Styles/FrontDesk/dashboard.module.css';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import CheckOutPanel from '../../Components/CheckOutPanel/CheckOutPanel';
import { getTimeSince } from '../../External/time';
import Nav from './Nav';
import EventBox from '../../Components/EventBox/EventBox';

const Dashboard = () => {
  const timeList = [
    '2023-10-20T10:14:35.739522+00:00',
    '2023-11-03T01:20:05.553968Z',
    '2023-11-02T01:20:03.553968Z',
    '2023-11-04T01:20:05.553968Z',
    '2023-11-05T01:20:05.553968Z',
    '2023-11-03T01:20:05.553968Z',
    '2023-11-02T01:20:03.553968Z',
    '2023-11-04T01:20:05.553968Z',
    '2023-11-05T01:20:05.553968Z',
  ];
  const [timeLeftList, setTimeLeftList] = useState([]);

  useEffect(() => {
    setInterval(() => {
      const updatedtimeLeftList = timeList.map((el) => getTimeSince(el));
      setTimeLeftList(updatedtimeLeftList)
    }, 1000)
  }, [])


  const data = {
    datasets: [
      {
        backgroundColor: ['#49a063', '#d3d3d3'],
        borderColor: "white",
        data: [80, 20],
        borderRadius: 10,
        cutout: '75%',
        radius: 50,
      },
    ],
  }

  return (
    <section className="wrapper">
      <section className="dashMain" style={{justifyContent:'space-between'}}>
        <Nav />
        <section className={styles.top}>
          <section className={styles.capacityBox}>
            <h3>Rooms <sub></sub></h3>
            <section>

              <div class={styles.chartBox}>
                <div className={styles.chart}>
                  <Doughnut data={data} style={{ position: 'relative', top: '-5px' }} />
                  <span className='bold'>87%</span>
                </div>
              </div>
              <article>
                <p>
                  <small><sub></sub>Total Rooms</small> <span>500</span>
                </p>
                <p>
                  <small><sub></sub>Occupied Rooms</small> <span>400</span>
                </p>
                <hr />
                <p>
                  <small><sub></sub> Free Rooms</small> <span>100</span>
                </p>
              </article>
            </section>
          </section>
          <Link to={'/frontDesk/addGuest'} className={styles.addBox}>
            {icon('group_add')}
            <strong>Add Guest</strong>
          </Link>
        </section>

        <section className={styles.mid}>
          <section className={styles.midLeft}>
            <div className={styles.roomsLeftBox}>
              <h3>Available Rooms<sub style={{ background: 'white' }}></sub></h3>
              <article>
                <p>
                  <span>Executive</span> <small>30</small>
                </p>
                <p>
                  <span>Deluxe</span> <small>50</small>
                </p>
                <p>
                  <span>Kitchenette</span> <small>100</small>
                </p>
                <p>
                  <span>Twin</span> <small>100</small>
                </p>
              </article>
            </div>
            <div className={styles.roomsLeftBox}>
              <h3>Room Rates<sub style={{ background: 'white' }}></sub></h3>
              <article>
                <p>
                  <span>Executive</span> <small>Gh₵ 1,200</small>
                </p>
                <p>
                  <span>Deluxe</span> <small>Gh₵ 1,000</small>
                </p>
                <p>
                  <span>Kitchenette</span> <small>Gh₵ 1,800</small>
                </p>
                <p>
                  <span>Twin</span> <small>Gh₵ 1,500</small>
                </p>
              </article>
            </div>
            <div className={styles.roomsLeftBox}>
              <h3>Capacity<sub style={{ background: 'white' }}></sub></h3>
              <article>
                <p>
                  <span>Executive</span> <small>1</small>
                </p>
                <p>
                  <span>Deluxe</span> <small>3</small>
                </p>
                <p>
                  <span>Kitchenette</span> <small>2</small>
                </p>
                <p>
                  <span>Twin</span> <small>2</small>
                </p>
              </article>
            </div>


            <div className={styles.guestBox}>
              {icon('person')}
              <strong className='bold'>400</strong>
              <small>Guests</small>
            </div>
            <div className={styles.areasBox}>
              {icon('payments')}
              <strong className='bold'>Ghc 40,000</strong>
              <small>Pending Payments</small>
            </div>
            <div className={styles.guestBox} style={{ background: 'salmon', color: 'white' }}>
              {icon('person')}
              <strong className='bold'>400</strong>
              <small>Owing</small>
            </div>
          </section>
        </section>
        <section className={styles.low}>
          <EventBox />
        </section>

      </section>
      
        <CheckOutPanel props={{scroll:true}} />
    </section>
  );
}

export default Dashboard;