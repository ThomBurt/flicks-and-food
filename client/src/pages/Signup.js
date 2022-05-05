import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from './../utils/mutations';
import Auth from './../utils/auth';
import logo from './../components/Assets/img/logo-WHITE.png';

import './Login/Login.css';

const Signup = (props) => {

  const [signupState, setSignupState] = useState({ username: '', email: '', password: '' });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleSignupChange = (event) => {
    const { name, value } = event.target;

    setSignupState({
      ...signupState,
      [name]: value,
    });
  };


  // submit form
  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...signupState }
      });
      
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <div>
      <h2>Sign Up</h2>

    <div className="login-wrap">
    <div className="login-html">

        {/* <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign Up</label> */}

            <div className="login-form">
              <form onSubmit={handleSignUpSubmit} action="" id="login-form">
                <div className="group">
                    
                    <input id="username-login" type="text" className="input" placeholder="Username" name='username'
                      value={signupState.username}
                      onChange={handleSignupChange}
                    />
                </div>
                <div className="group">
                    
                    <input id="email-login" type="email" className="input" data-type="email" placeholder="Email Address" name='email'
                      value={signupState.email}
                      onChange={handleSignupChange}
                    />
                </div>
                <div className="group">
                    
                    <input id="password-login" type="password" className="input" data-type="password" placeholder="Password" name='password'
                      value={signupState.password}
                      onChange={handleSignupChange}
                    />
                </div>
                <div className="group">
                    <button id="login-btn" type="submit" className="btn">Sign Up</button>
                </div>
                {/* <div className="foot-lnk">
                    <label for="tab-1">Already a Member?
                        </label>
                </div> */}
              </form>
                <div className="hr"></div>
                <img src={logo} alt="flicksandfood-logo" width="400px" className="logo" />
            </div>

              {error && <div>Login failed</div>}
        </div>
    </div>
    </div>

  );
};

export default Signup;





// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({ username: '', email: '', password: '' });

//   const [addUser, { error}] = useMutation(ADD_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };


//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // use try/catch instead of promises to handle errors
//     try {
//       // execute addUser mutation and pass in variable data from form
//       const { data } = await addUser({
//         variables: { ...formState }
//       });
      
//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <main className='flex-row justify-center mb-4'>
//       <div className='col-12 col-md-6'>
//         <div className='card'>
//           <h4 className='card-header'>Sign Up</h4>
//           <div className='card-body'>
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 className='form-input'
//                 placeholder='Your username'
//                 name='username'
//                 type='username'
//                 id='username'
//                 value={formState.username}
//                 onChange={handleChange}
//               />
//               <input
//                 className='form-input'
//                 placeholder='Your email'
//                 name='email'
//                 type='email'
//                 id='email'
//                 value={formState.email}
//                 onChange={handleChange}
//               />
//               <input
//                 className='form-input'
//                 placeholder='******'
//                 name='password'
//                 type='password'
//                 id='password'
//                 value={formState.password}
//                 onChange={handleChange}
//               />
//               <button className='btn d-block w-100' type='submit'>
//                 Submit
//               </button>
//             </form>
//             {error && <div>Sign up failed</div>}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;
