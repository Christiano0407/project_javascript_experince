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

/**
*6 => Calcule cuántos grados hicieron los segundos transcurridos de nuestra manecilla de minutos;
 & Multiplicamos por 6 porque cada segundo transcurrido hizo 6 ° en el reloj por cierto. Es lo mismo para el cálculo del grado de la hora.

* Multiplicamos por 6 porque cada segundo transcurrido hizo 6 ° en el reloj por cierto. Es lo mismo para el cálculo del grado de la hora.

 sin ((segundos/60) * 6) y ((mins/60)*30), un cambio en el minuto (es decir, 15min a 16min después de la finalización de los 60s) y un cambio en la hora (es decir, 3:00 a 4:00 - después de una finalización de 60 minutos) girarán su respectiva mano recta de un punto a otro y sí la transición lo hará suave para que el movimiento de rotación no se note.

La suma ((segundos/60) * 6) asegura un aumento marginal en la manecilla de los minutos después de cada segundo conteo. El grado máximo que puede cambiar la manecilla de minutos es de 6 grados calculado a partir de 360 grados / 60 minutos. Cada segundo conteo ahora causará un movimiento de rotación de 6/60s = 0.1deg en la manecilla de minutos que será equivalente a 0.1 * 60s = 6deg después del conteo de 60s. Cuando eche un vistazo cuidadoso a la manecilla de los minutos, notará un movimiento de rotación sutil y marginal en la manecilla de los minutos después de CADA SEGUNDO CUENTA. Cada pequeño movimiento marginal es de 0.1 grados. Sin eso, el minutero se mueve directamente de un punto a otro.

Sumar ((mins/60)*30) también asegura un aumento marginal en la aguja de la HORA después de cada conteo de MINUTOS. El grado máximo que el minutero puede girar es de 30 grados calculado a partir de 360 grados / 12 horas. Cada CONTEO DE MINUTOS, no segundo conteo, ahora causará un movimiento de rotación de 30/60 minutos = 0.5 grados en la manecilla de las horas, lo que equivale a 0.5 * 60 minutos = 30 grados. 30 grados será el movimiento de rotación máximo de una hora a otra. es decir, de 3:00 a 4:00. Se puede ver un movimiento marginal en la manecilla de las horas después de cada recuento de minutos. Cada pequeño movimiento marginal de la manecilla de la hora es de 0,5 grados. *Sin ((mins/60)30) que causan estos pequeños movimientos marginales, el minutero se moverá directamente de un punto a otro.
*/
