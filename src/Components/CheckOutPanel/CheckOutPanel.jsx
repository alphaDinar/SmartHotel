import { useEffect, useState } from 'react';
import { icon } from '../../External/design';
import styles from './checkOutPanel.module.css';
import { getTimeSince } from '../../External/time';

const CheckOutPanel = ({props}) => {
  const [panelToggled, setPanelToggled] = useState(false);
  const {scroll} = props ;

  const togglePanel = () => {
    panelToggled ? setPanelToggled(false) : setPanelToggled(true);
  }

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
    <section className={
      window.innerWidth > 1250 ? 'sidePanel' :
        panelToggled ? 'sidePanel change' :
          'sidePanel'
    }>
      <section className={styles.checkOutBoxHolder}>
        <sup onClick={togglePanel}>{icon('chevron_left')}</sup>
        <section className="checkOutBox box" style={{gap:'0.5rem'}}>
          <h3>Check outs<sub></sub></h3>
          <div className='searchBox'>
            <input type="" name="" value="" />
            {icon('search')}
          </div>
          <div className={scroll ? `${styles.checkOuts} ${styles.scroll} boxLis` : `${styles.checkOuts} boxLis`}>
            {['Kwadwo Nkansah', 'paul Arthur', 'Mali Ray', 'Paul Wall', 'Knighentgale peterson', 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el, i) => (
              <a key={i} className="boxLi">
                <p>
                  <span className='cut'>{el}</span>
                  <span>
                    {icon('chair')}
                    <small>101</small>
                  </span>
                </p>
                <legend>{timeLeftList[i]}</legend>
                <h6>₵ 3,500</h6>
                <sub style={{ background: 'var(--fail)' }}></sub>
              </a>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}

export default CheckOutPanel;