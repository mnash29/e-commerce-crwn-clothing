import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
          <CustomButton onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;