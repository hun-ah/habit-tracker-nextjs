import moment from 'moment';

const TodaysDate = () => {
  let currentDateLocal = moment().startOf('day')._d.toString();
  return (
    <h2>Today is: {currentDateLocal.split(' ').splice(0, 4).join(' ')}</h2>
  );
};
export default TodaysDate;
