import '../../styles/who.css';
import Image from 'next/image';

const Who = () => {
  return (
    <div className='who-container' id='who'>
      <Image
        src='/people.svg'
        alt='four avatars of different people'
        width={200}
        height={50}
      />
      <h3>Who is it for?</h3>
      <p>
        Habit Tracker is for the individual who is ready to make healthy changes
        and build better habits in their day to day life.
      </p>
      <p>
        Having solid and healthy habits can be harder than we think and
        sometimes daunting to keep up with. This app aims to simplify the
        process and help users create a list of simple daily habits and a place
        to keep track of them.
      </p>
    </div>
  );
};

export default Who;
