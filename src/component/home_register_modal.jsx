import React from "react";

const HomeRegisterModal = ({ closeModal }) => {
  return (
    <div>
      {" "}
      <div className="bg-[#131319] h-screen w-screen">
        <div id="login-box" className="py-[2rem]">
          {/* login - box */}
          <div className="bg-[#27292D] w-[35rem] h-full mx-auto border border-2 rounded-lg border-gray-400">
            {/* heading */}
            <div className="flex">
              <div className="w-fit h-full bg-[#131319] rounded-full flex items-center p-[1rem] absolute h-auto right-[25rem] top-[3rem]">
                <div onClick={closeModal}>
                  <img src="/images/close-btn.png" />
                </div>
              </div>
              <div className="mx-auto px-[3rem] w-fit pt-[2rem] text-center">
                <div className="text-[#6B6C70] text-sm font-medium">
                  SIGN UP
                </div>
                <div className="text-[#FFFFFF] text-lg font-semibold">
                  Create an account to continue
                </div>
              </div>
            </div>
            {/* form */}

            <form class="max-w-sm mx-auto p-[2rem]">
              <div class="mb-5">
                <label
                  for="Email"
                  class="block mb-2 text-sm font-medium text-[#C5C7CA] "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class=" border border-[#35373B] text-[#FFFFFF] text-sm placeholder:text-[16px] placeholder:text-[#7F8084] placeholder:font-normal  rounded  block w-full p-3  bg-[#27292D]"
                  placeholder="Enter your email "
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="Username"
                  class="block mb-2 text-sm font-medium text-[#C5C7CA] "
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  class=" border border-[#35373B] text-[#FFFFFF] text-sm placeholder:text-[16px] placeholder:text-[#7F8084] placeholder:font-normal  rounded  block w-full p-3  bg-[#27292D]"
                  placeholder="Choose a preferred username "
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="Password"
                  class="block mb-2 text-sm font-medium text-[#C5C7CA] "
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
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
                Continue
              </button>
              <div className="text-[#7F8084] mb-5">
                Already have an account?{" "}
                <span className="text-white font-normal space-x-1">
                  Login →
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRegisterModal;
