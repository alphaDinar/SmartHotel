export const getTimeSince = (props) => {
  const currentDate = new Date();
  const targetDate = new Date(props);
  const timeDifference = targetDate - currentDate;
  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const formattedDays = days < 10 ? `0${days}` : days;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    if (days > 0) {
      return `${formattedDays} days left`;
    } else {
      return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
    }
  } else {
    return 'Expired';
  }
}

export const getDuration = (timeA, timeB)=>{
  const timeDifference = timeB.getTime() - timeA.getTime();
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return days;
}