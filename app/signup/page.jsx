import Modal from '../components/Modal';

const SignupPage = () => {
  return (
    <Modal
      page='signup'
      title='Sign up'
      subtext='Already have an account? Login'
      href='/login'
    />
  );
};

export default SignupPage;
