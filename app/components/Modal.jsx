'use client';
import validator from 'validator';
import '../styles/modal.css';
import '../styles/buttons.css';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Input from './Input';
import Button from './Button';
import Link from 'next/link';

const signupInputs = [
  {
    name: 'name',
    placeholder: 'Enter name',
    label: 'Name',
    htmlFor: 'name',
    type: 'text',
  },
  {
    name: 'email',
    placeholder: 'example@gmail.com',
    label: 'Email',
    htmlFor: 'email',
    type: 'text',
  },
  {
    name: 'password',
    placeholder: 'Enter password',
    label: 'Password',
    htmlFor: 'password',
    type: 'password',
  },
];

const loginInputs = [
  {
    name: 'email',
    placeholder: 'example@gmail.com',
    label: 'Email',
    htmlFor: 'email',
    type: 'text',
  },
  {
    name: 'password',
    placeholder: 'password',
    label: 'Password',
    htmlFor: 'password',
    type: 'password',
  },
];

const Modal = ({ title, subtext, href, page }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [err, setErr] = useState('');
  const [signupErr, setSignupErr] = useState('');
  const [success, setSuccess] = useState('');
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setErr(params.get('error'));
    setSuccess(params.get('success'));
  }, [params]);

  console.log(err);

  let inputDisplay;
  let btnText;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  };

  // create new user
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formInputs.name,
          email: formInputs.email,
          password: formInputs.password,
        }),
      });

      if (formInputs.password.length < 6) {
        setSignupErr('Password should be at least 6 characters');
      }

      if (!validator.isEmail(formInputs.email)) {
        setSignupErr('Please enter a valid email address');
      }

      if (!formInputs.name || !formInputs.email || !formInputs.password) {
        setSignupErr('Please fill in all fields');
      }

      res.status === 201 &&
        router.push(
          '/login?success=Account created! Login to start tracking your habits'
        );
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  };

  // login user
  const handleLogin = async (e) => {
    e.preventDefault();

    signIn('credentials', {
      callbackUrl: '/habits',
      email: formInputs.email,
      password: formInputs.password,
    });
  };

  // what inputs to use for displaying inside of the modal
  if (page === 'signup') {
    inputDisplay = signupInputs;
    btnText = 'Create account';
  } else if (page === 'login') {
    inputDisplay = loginInputs;
    btnText = 'Login';
  }

  return (
    <div className='modal-container'>
      <div className='modal'>
        <h1 className='modal-title'>{title}</h1>
        <form
          className='login-signup-form'
          onSubmit={page === 'signup' ? handleSignup : handleLogin}
        >
          {/* login errors */}
          {err && (
            <span className='login-error'>
              {err.split(' ').slice(1).join(' ')}
            </span>
          )}
          {/* signup errors */}
          {signupErr && <span className='login-error'>{signupErr}</span>}
          {/* signup success */}
          {success && (
            <span className='login-success'>
              {success.split(' ').join(' ')}
            </span>
          )}
          {inputDisplay.map((input) => (
            <Input
              key={input.name}
              name={input.name}
              placeholder={input.placeholder}
              label={input.label}
              htmlFor={input.label}
              type={input.type}
              className='login-signup-input'
              handleInputChange={handleInputChange}
            />
          ))}
          <Button className='primary-btn login-signup-btn' text={btnText} />
        </form>
        <span>
          {subtext}{' '}
          <Link href={href} className='text-primary'>
            here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Modal;
