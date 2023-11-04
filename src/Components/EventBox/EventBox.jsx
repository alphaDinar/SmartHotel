import { useEffect, useState } from 'react';
import { icon } from '../../External/design';
import styles from './eventBox.module.css';
import { getTimeSince } from '../../External/time';

const EventBox = () => {
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

  return (
    <section className={styles.eventBoxHolder}>  
    <section className={`${styles.eventBox} cutScroll`}>
      <section className={styles.events}>
        <div className={styles.sheet}>
          <h3>Upcoming Events<sub></sub></h3>
          <span>+ 3 More</span>
          {icon('arrow_forward')}
        </div>
        {[0, 0, 0, 0, 0].map((el, i) => (
          <div className={styles.event}>
            <p>
              <strong>Asokwa Conference</strong>
              <small>23rd March,2024</small>
            </p>
            <legend>{timeLeftList[i]}</legend>
            {icon('arrow_forward')}
          </div>
        ))}
        <div className={styles.more}>

        </div>
      </section>

    </section>
    </section>
  );
}

export default EventBox;