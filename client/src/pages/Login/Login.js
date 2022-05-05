import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import logo from '../../components/Assets/img/logo-WHITE.png';

import './Login.css';
const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
  
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

  };


  // const [signupState, setSignupState] = useState({ username: '', email: '', password: '' });

  // const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  // const handleSignupChange = (event) => {
  //   const { name, value } = event.target;

  //   setSignupState({
  //     ...signupState,
  //     [name]: value,
  //   });
  // };


  // // submit form
  // const handleSignUpSubmit = async (event) => {
  //   event.preventDefault();

  //   // use try/catch instead of promises to handle errors
  //   try {
  //     // execute addUser mutation and pass in variable data from form
  //     const { data } = await addUser({
  //       variables: { ...signupState }
  //     });
      
  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };



  return (
    <div>
    <h2>Log In</h2>

    <div className="login-wrap">
    <div className="login-html">
      <h3 className="sign-in">Login</h3>
        {/* <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Login</label> */}
        {/* <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label> */}

        <div className="login-form">
            <form onSubmit={handleFormSubmit} action="" id="login-form">
              {/* <div className="sign-in-htm"> */}
                <div className="group">
                    
                    <input id="username-login" type="email" name='email' className="input" placeholder="Email" 
                      value={formState.email}
                      onChange={handleChange} />
                </div>
                <div className="group">
                   
                    <input id="password-login" type="password" name='password' className="input" data-type="password" placeholder="Password" 
                      value={formState.password}
                      onChange={handleChange}
                    />
                </div>
                <div className="group">
                    <button id="login-btn" type="submit" className="btn">Login</button>
                </div>
              {/* </div>   */}
            </form>
                <div className="hr"></div>
                <img src={logo} alt="flicksandfood-logo" width="400px" className="logo" />
              </div>

              {error && <div>Login failed</div>}
        </div>
    </div>
    </div>


    // <main className='flex-row justify-center mb-4'>
    //   <div className='col-12 col-md-6'>
    //     <div className='card'>
    //       <h4 className='card-header'>Login</h4>
    //       <div className='card-body'>
    //         <form onSubmit={handleFormSubmit}>
    //           <input
    //             className='form-input'
    //             placeholder='Your email'
    //             name='email'
    //             type='email'
    //             id='email'
    //             value={formState.email}
    //             onChange={handleChange}
    //           />
    //           <input
    //             className='form-input'
    //             placeholder='******'
    //             name='password'
    //             type='password'
    //             id='password'
    //             value={formState.password}
    //             onChange={handleChange}
    //           />
    //           <button className='btn d-block w-100' type='submit'>
    //             Submit
    //           </button>
    //         </form>
    //         {error && <div>Login failed</div>}
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Login;
