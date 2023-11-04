import { Link, useNavigate } from 'react-router-dom';
import CheckOutPanel from '../../Components/CheckOutPanel/CheckOutPanel';
import Nav from './Nav';
import { useRef, useState } from 'react';
import styles from '../../Styles/FrontDesk/addGuest.module.css';
import { icon } from '../../External/design';
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.css';
import { useEffect } from 'react';
import { getDuration } from '../../External/time';

const AddGuest = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');

  const [dayCount, setDayCount] = useState(1);
  const [total, setTotal] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState('');
  const [roomSearchIn, setRoomSearchIn] = useState('');

  const checkInDateIn = useRef(null);
  const checkInTimeIn = useRef(null);

  const roomList = [
    { id: 1, number: 101, floor: 1, type: 'Executive', status: 'free' },
    { id: 2, number: 102, floor: 1, type: 'Executive', status: 'free' },
    { id: 3, number: 103, floor: 1, type: 'Executive', status: 'free' },
  ]

  useEffect(() => {
    sessionStorage.removeItem('roomType');

    const dateOptions = {
      altInput: true,
      mode: "range",
      altFormat: "J F, Y",
      dateFormat: "Y-m-d",
      minDate: "today",
      defaultDate: [new Date(), new Date().setDate(new Date().getDate() + 1)],
      onChange: () => {
        handleDateTime()
      }
    }
    flatpickr(checkInDateIn.current, dateOptions);

    const timeOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      defaultDate: new Date()
    }
    flatpickr(checkInTimeIn.current, timeOptions);

    setRooms(roomList)
  }, [])

  const handleDateTime = (val) => {
    const updatedDates = checkInDateIn.current._flatpickr.selectedDates;
    const userTime = checkInTimeIn.current._flatpickr.selectedDates[0];

    updatedDates.map((dateObj) => {
      dateObj.setHours(userTime.getHours())
      dateObj.setMinutes(userTime.getMinutes())
    })

    let price = '';
    if (val) {
      price = val.split(',')[1];
    } else {
      price = sessionStorage.getItem('roomType').split(',')[1]
    }

    const checkInDate = updatedDates[0];
    const checkOutDate = updatedDates[1];
    if (checkInDate, checkOutDate) {
      setDayCount(getDuration(checkInDate, checkOutDate))
      setTotal((getDuration(checkInDate, checkOutDate)) * price)
    }
  }

  const createGuest = () => {
    if(room){
      console.log(room)
    }else{
      console.log('select a room')
    }
  }

  const filterRooms =(val)=>{
    console.log(roomList[0].number, val)
    setRooms(roomList.filter((el)=> (el.number.toString()).includes(val)))
  }

  return (
    <section className="wrapper">
      <section className="dashMain">
        <Nav />

        <section className={styles.formBox}>
          <header>
            <h3>Add Guest <sub></sub></h3>
          </header>
          <form onSubmit={(e) => { e.preventDefault(); createGuest();}}>

            <article>
              <p>
                <span>Full Name</span>
                <input type="text" value={fullName} onChange={(e) => { setFullName(e.target.value) }} required />
              </p>
              <p>
                <span>Email</span>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}  required />
              </p>
              <p>
                <span>Phone</span>
                <input type="tel" value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
              </p>
              <p>
                <span>Room Type</span>
                <select required onChange={(e) => { setRoomType(e.target.value); sessionStorage.setItem('roomType', e.target.value); handleDateTime(e.target.value) }}>
                  <option value='' hidden>Select Room Type</option>
                  <option value="executive,2000">Executive - 2000</option>
                  <option value="regular,1000">Regular - 1000</option>
                </select>
              </p>
            </article>

            <section className={styles.roomBox}>
              <header>
                <div>
                  <input type="number" placeholder='search Room' value={roomSearchIn} onChange={(e) => { setRoomSearchIn(e.target.value); filterRooms(e.target.value) }} />
                  {icon('search')}
                </div>
              </header>
              <section className={`${styles.rooms} cutScroll`}>
                {rooms.map((el, i) => (
                  <legend onClick={() => { setRoom(el.id) }} style={room === el.id ? { background: 'var(--pass)' } : { background: 'var(--dark)' }}>
                    {icon('chair')}
                    <span>{el.number}</span>
                  </legend>
                ))}
              </section>
            </section>

            <p>
              <span>Duration</span>
              <input type="date" className={styles.date} ref={checkInDateIn} />
              <input type="time" className={styles.date} ref={checkInTimeIn} />
            </p>

            <section className={styles.totalBox}>
              <div>
                <strong>{dayCount}</strong>
                <span>Days</span>
              </div>
              <div>
                <strong>{total.toLocaleString()}</strong>
                <span>GHc</span>
              </div>

              <button type='submit' className={styles.createGuest}>
                <span>Confirm</span>
                {icon('north_east')}
              </button>
            </section>
          </form>
        </section>
      </section>
      <CheckOutPanel props={{scroll : true}} />
    </section>
  );
}

export default AddGuest;