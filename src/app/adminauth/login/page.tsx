// "use client";
// import React, { useState } from 'react';
// import '../auth.css';
// import { ToastContainer, toast } from 'react-toastify';
// const SignupPage = () => { 
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//         const handleSignup = async () => { 
//             const response
//         }
//     return (
//        <div className='formpage'>
//         <input
//          type='text'
//          placeholder='Name'
//          value={name}
//          onChange={(e) => setName(e.target.value)}
//         />
       
//        <input
//        type='email'
//        placeholder='Email'
//        value={email}
//        onChange={(e) => setEmail(e.target.value)}
//       />
     
//      <input
//          type='password'
//          placeholder='Password'
//          value={password}
//          onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleSignup}>Signup</button>
//     </div> 


//  )

// }

// export default SignupPage
'use client';
import React, { useState } from 'react';
import '../auth.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signuppage = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });


            if (response.ok) {
              const data = await response.json();

                console.log('Admin login successful', data);
                toast.success('Admin Login Successful', {
                    position: 'top-center',
                });
                window.location.href = '/pages/addworkout';
            } else {
                console.error('Admin login failed', response.statusText);
                toast.error('Admin Login Failed', {
                    position: 'top-center',
                });
            }
        } catch (error) {
            toast.error('An error occurred during registration');
            console.error('An error occurred during registration', error);
        }
    };

    return (
        <div className='formpage'>
            <ToastContainer />
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='password'
                value={email}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <button onClick={handleSignup}>Sign in</button>
        </div>
    );
};

export default Signuppage;
