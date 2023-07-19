import Modal from '../components/modal/Modal';

const LoginPage = () => {
  return (
    <Modal
      page='login'
      title='Login'
      subtext='New to Habit Tracker? Register'
      href='/signup'
    />
  );
};

export default LoginPage;
