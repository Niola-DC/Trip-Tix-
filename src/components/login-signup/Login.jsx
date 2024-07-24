import React, { useState } from 'react';
import axios from 'axios';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { google } from '../../assets/images';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../axiosClient';
import { useStateContext } from '../../context/ContextProvider';


const Login = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  // const [user] = useState(null);
  const navigate = useNavigate();
  const {token,setToken} = useStateContext();

  if(token){
    return navigate("/")
  }
  
  const handleHome = () => {
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/signUp');
  };

  const toggle = () => {
    setOpen(!open);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    axiosClient.post('/api/auth/login', {
      email,
      password,
    })
    .then(response => {
      console.log('Registration successful:', response.data);
      setMessage('Registration successful!');
      navigate('/');
    })
    .catch(error => {
      console.error('Error registering:', error);
      setMessage('Registration failed, please try again.');
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axiosClient.post('/api/auth/login', {
      email,
      password
    })
    .then(response => {
      console.log('Login successful:', response.data);
      setToken(response.data.token);
      setMessage('Login successful!');
      navigate('/');
    })
    .catch(error => {
      console.error('Error logging in:', error);
      setMessage('Login failed, please try again.');
    });
  };


  return (
    <div>
      <div>
        <div className="p flex h-auto flex-col gap-[30px] items-center my-5 w-full p-7 sm:p-10 bg-white">
          <div className="flex w-full h-full">
            <div className="w-[50%] content-text px-[20px] pr-[40px] flex gap-[15px] flex-col">
              <span className="absolute text-black hover:bg-gray-300 p-2 rounded-[20px] border-black top-3 left-10">
                <FaArrowLeftLong size={"1.5rem"} onClick={handleHome} />
              </span>
              <h1 className="text-3xl font-medium text-black">TripTix</h1>
              <p className="mt-[15px] font-medium lg:font-[590] text-[#2C2D2E] text-[27px] sm:text-[30px] leading-[45px]">
                Welcome Back 👋
              </p>
              <p className="text-[#8692A6] font-[400] text-[18px] leading-[28px]">
                We are happy to have you back
              </p>

              <form onSubmit={handleLogin} className="flex flex-col gap-[15px] mt-6 w-full">
                <div className="flex flex-col text-[#696F79] font-[500] text-[16px] leading-[24px] gap-[5px]">
                  <p>Email address*</p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="border border-[#282A2F] focus:outline-none focus:shadow-outline bg-[#EFF0F3] rounded-[5px] p-[15px] w-full"
                  />
                </div>
                <div className="flex flex-col text-[#696F79] font-[500] text-[16px] leading-[24px] gap-[5px]">
                  <p>Your Password*</p>
                  <div className="flex justify-between border border-[#282A2F] bg-[#EFF0F3] rounded-[5px]">
                    <input
                      type={open === false ? 'password' : 'text'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="bg-[#EFF0F3] w-full p-[15px] focus:outline-none focus:shadow-outline"
                    />
                    <div className="flex justify-center items-center p-[15px] text-xl">
                      {open === false ? (
                        <FiEyeOff onClick={toggle} />
                      ) : (
                        <FiEye onClick={toggle} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[10px] text-[#696F79] font-[500] text-[16px] leading-[24px]">
                  <input
                    type="checkbox"
                    id="terms"
                    className="custom-checkbox"
                  />
                  <label htmlFor="terms">I agree to terms & conditions</label>
                </div>
                <button
                  type="submit"
                  className="bg-[#0E385C] p-[15px] rounded-[6px] font leading-[19.36px] text-[16px] text-white font-medium "
                >
                  Login
                </button>
              </form>
              {message && <p className="text-center text-red-500 mt-4">{message}</p>}
              <div className="flex justify-center items-center gap-6 text-[#2C2D2E] w-full p-[10px]">
                <hr className="w-[50%]" />
                <p className="font-[400] text-[14px] leading-[16.94px]">or</p>
                <hr className="w-[50%]" />
              </div>
              <button className="flex p-[15px] justify-center px-[50px] rounded-[6px] font text-[16px] font-medium gap-3 lg:gap-6 bg-black text-white items-center">
                <div className="w-[20px]">
                  <img src={google} alt="google" />
                </div>
                Register with Google
              </button>
              <div className="flex justify-center items-center text-[16px] leading-[24px]">
                <p className="text-[#696F79] font-[500]">Don't have an account? <span onClick={handleSignUp} className="text-[#0E385C] text-[17px] font-[590] cursor-pointer font">Register</span></p>
              </div>
            </div>
            <div className="signup rounded-[20px] w-[50%]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
