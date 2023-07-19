const HabitsLeft = ({ habitsLeft, isLoading }) => {
  return (
    <span className='habits-left-container'>
      Habits left today
      <span className={isLoading ? 'loading-circle' : 'circle'}>
        {habitsLeft}
      </span>
    </span>
  );
};

export default HabitsLeft;
