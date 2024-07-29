import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData : ", formData);
    setFormData({ email: "", password: "" });
    navigate("/home");
  };
  return (
    <div className="bg-[#131319] h-screen w-screen">
      <div id="login-box" className="py-[2rem]">
        <div className="h-[2rem] w-[2rem] mx-auto mb-4">
          <img src="/images/logo.png" width={100} height={100} />
        </div>
        {/* login - box */}
        <div className="bg-[#27292D] w-[35rem] h-[30rem] mx-auto border border-2 rounded-lg border-gray-400">
          {/* heading */}
          <div className="mx-auto px-[3rem] w-fit pt-[2rem] text-center">
            <div className="text-[#6B6C70] text-sm font-medium">
              WELCOME BACK
            </div>
            <div className="text-[#FFFFFF] text-lg font-semibold">
              Log into your account
            </div>
          </div>
          {/* form */}

          <form class="max-w-sm mx-auto p-[2rem]" onSubmit={handleSubmit}>
            <div class="mb-5">
              <label
                for="Email or Username"
                class="block mb-2 text-sm font-medium text-[#C5C7CA] "
              >
                Email or Username
              </label>
              <input
                type="text"
                id="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                class=" border border-[#35373B] text-[#FFFFFF] text-sm placeholder:text-[16px] placeholder:text-[#7F8084] placeholder:font-normal  rounded  block w-full p-3  bg-[#27292D]"
                placeholder="Enter your email or username"
                required
              />
            </div>
            <div class="mb-5">
              <div className="flex flex-row justify-between s">
                <label
                  for="Password"
                  class="block mb-2 text-sm font-medium text-[#C5C7CA] "
                >
                  Password
                </label>
                <div className="font-medium text-xs text-[#C5C7CA]">
                  Forgot password?
                </div>
              </div>

              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                class=" border border-[#35373B] text-[#FFFFFF] text-sm placeholder:text-[16px] placeholder:text-[#7F8084] placeholder:font-normal  rounded  block w-full p-3  bg-[#27292D]"
                placeholder="Enter your password"
                required
              />
              <div className="relative top-[-2rem] left-[18rem]">
                <img src="/images/eye-icon.png" />
              </div>
            </div>

            <button
              type="submit"
              class="text-white bg-[#4A96FF] mb-5 font-medium rounded text-base  w-full  px-5 py-2.5 text-center "
            >
              Login now
            </button>
            <div className="text-[#7F8084] mb-5">
              Not registered yet?{" "}
              <span className="text-white font-normal">Register →</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
