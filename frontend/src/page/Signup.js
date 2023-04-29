import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setData((preve) => {
      return{
        ...preve,
        [name] : value
      }
    })
  }

  // Upload Image Handler
  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    console.log(data)

    setData((preve) => {
      return{
        ...preve,
        image : data
      }
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    const {firstName, email, password, confirmPassword} = data;

    {/** check form */}
    if ( firstName && email && password && confirmPassword) {
      if(password === confirmPassword) {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
          method : "POST",
          headers : {
            "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        });
        const Resdata = await fetchData.json();
        toast.success(Resdata.message)
        if(Resdata.alert){
          navigate('/login') 
        }
        
      }else {
        toast.error('check your password please!');
      }
    }else {
      toast.error("Enter all field please!");
    }
  }

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'> Sign up</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full m-auto drop-shadow-md shadow-md relative">
          
          <img src={data.image ? data.image : loginSignupImage} className="w-full h-full" />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={'file'} id='profileImage' accept="image/*" className="hidden" onChange={handleUploadProfileImage}></input>

          </label>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="rounded mt-1 mb-2 w-full bg-slate-200 px-2 py-1 focus-within:outline focus-within:outline-blue-500"
            value={data.firstName}
            onChange={handleOnChange}
          ></input>

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="rounded mt-1 mb-2 w-full bg-slate-200 px-2 py-1 focus-within:outline focus-within:outline-blue-500"
            value={data.lastName}
            onChange={handleOnChange}
          ></input>

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="rounded mt-1 mb-2 w-full bg-slate-200 px-2 py-1 focus-within:outline focus-within:outline-blue-500"
            value={data.email}
            onChange={handleOnChange}
         ></input>

          <label htmlFor="password">Password</label>
          <div className="flex rounded mt-1 mb-2 px-2 py-1 bg-slate-200 focus-within:outline focus-within:outline-blue-500">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            ></input>
            <span
              className="flex text-xl mt-1 cursor-pointer"
              onClick={handleShowPassword}
            >
              {" "}
              {showPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}{" "}
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex rounded mt-1 mb-2 px-2 py-1 bg-slate-200 focus-within:outline focus-within:outline-blue-500">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            ></input>
            <span
              className="flex text-xl mt-1 cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {" "}
              {showConfirmPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}{" "}
            </span>
          </div>

          <button type="submit" className="max-w-[120px] w-full bg-green-500 hover:bg-green-600 cursor-pointer m-auto mt-4 rounded text-xl font-medium text-white">
            Sign up
          </button>
        </form>

        <p className="text-left">
          Already have accout?{" "}
          <Link to={"/login"} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
