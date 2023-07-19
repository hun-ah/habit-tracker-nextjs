import moment from 'moment';

const TodaysDate = () => {
  let currentDateLocal = moment().startOf('day')._d.toString();
  //   let utcDate = moment().utc().startOf('day')._d.toString();
  //   let utcDateMs = new Date(utcDate).getTime();
  return (
    <h2>Today is: {currentDateLocal.split(' ').splice(0, 4).join(' ')}</h2>
  );
};
export default TodaysDate;
