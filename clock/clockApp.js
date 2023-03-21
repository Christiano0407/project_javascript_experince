//**TODO ================================ === Clock === ===============================================  */
//** === ==== Variable / Const & Let ===== === */

const hourHand = document.getElementById(`idHour`);
const minuteHand = document.getElementById(`idMinute`);
const secondHand = document.getElementById(`idSecond`);

//** ======== Events ======== */

const addDates = () => {
  const newDates = new Date(); // Get Date

  const second = newDates.getSeconds(); // Method Second
  const getSecondsDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${getSecondsDegree}deg)`;
  //console.log(getSeconds);

  const minutes = newDates.getMinutes();
  const getMinutesDegree = (minutes / 60) * 360 + (second / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${getMinutesDegree}deg)`;
  //console.log(minutes);

  const hour = newDates.getHours();
  const getHourDegree = (hour / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${getHourDegree}deg)`;
  //console.log(hour);
};

//**! === Interval Time === */
setInterval(addDates, 1000);

//**! === Call === */
addDates();
