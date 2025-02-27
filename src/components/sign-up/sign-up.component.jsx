import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { createUserWithEmailStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';


const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(createUserWithEmailStart({ email, password, displayName }));
  }


  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <div className='sign-up'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp;