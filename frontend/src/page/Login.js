import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    {
      /** check form */
    }

    if (email && password) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
          );
          const Resdata = response.data;
          toast.success(Resdata.message);

        if (Resdata.alert) {
          dispatch(loginRedux(Resdata));
          setTimeout(() => navigate("/"), 1000);
        }
      } catch (error) {
        toast.error('Your password wrong, check again!');
      }
    } else {
      toast.error("Please enter required fields!");
    }
  };

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'> Sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full m-auto drop-shadow-md shadow-md">
          <img src={loginSignupImage} className="w-full" />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="max-w-[120px] w-full bg-green-500 hover:bg-green-600 cursor-pointer m-auto mt-4 rounded text-xl font-medium text-white"
          >
            Login
          </button>
        </form>

        <p className="text-left">
          Don't have account ?{" "}
          <Link to={"/signup"} className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
