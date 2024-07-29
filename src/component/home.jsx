import React, { useEffect, useState } from "react";
import HomeRegisterModal from "./home_register_modal";

const Home = () => {
  const [post, setPost] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setPost(e.target.value);
  };
  useEffect(() => {
    if (isModalOpen) {
      console.log("Modal is open");
    } else {
      console.log("Modal is closed");
    }
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("post : ", post);
    setPost("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#131319] h-full w-screen">
      <div id="login-box" className="py-[2rem] ">
        <div className="mx-auto px-[3rem] w-fit pt-[2rem] ">
          <div className="text-[#C5C7CA] text-[28px] font-medium mb-5">
            Hello Jane
          </div>
          <div className="text-[#7F8084] text-[16px]  font-normal mb-5">
            How are you doing today? Would you like to share something with the
            community 🤗
          </div>
          {/* post */}
          <form onSubmit={handleSubmit}>
            <div className="bg-[#27292D] h-full w-[700px] mb-5 border border-[#35373B] border-2 rounded-lg flex flex-col">
              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px]">
                Create post
              </div>

              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px] relative">
                <div className="w-fit h-full bg-[#27292D] rounded-full flex items-center p-[1rem] absolute h-auto bottom-[1rem] left-[1.5rem]">
                  <div>
                    <img src="/images/message-icon.png" />
                  </div>
                </div>
                <input
                  type="text"
                  id="post"
                  name="post"
                  value={post}
                  onChange={handleChange}
                  className="border border-[#35373B] text-sm placeholder:px-[rem] placeholder:text-lg placeholder:text-[#7F8084] placeholder:font-normal rounded block w-full pl-[4rem] pr-[1rem] bg-[#191920] py-[2rem]"
                  placeholder="How are you feeling today?"
                  required
                />
              </div>

              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px]  flex justify-end">
                <button
                  type="submit"
                  class="text-white bg-[#4A96FF] mb-5 font-medium rounded text-base  w-fit  px-5 py-2.5 text-center "
                >
                  Post
                </button>
              </div>
            </div>
          </form>

          <div>
            <div className="bg-[#27292D] h-full w-[700px] mb-5 border border-[#35373B] border-2 rounded-lg flex flex-col">
              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px] flex items-center justify-between">
                <div className="flex justify-between items-center ">
                  <div id="photo">
                    <img src="images/profile-img.png" />
                  </div>
                  <div className="flex flex-col justify-between  ml-4">
                    <div className="text-[#C5C7CA] font-medium text-base">
                      Theresa Webb
                    </div>
                    <div className="text-[#7F8084] text-sm font-normal">
                      5 mins ago
                    </div>
                  </div>
                </div>
                <div>
                  <img src="images/Dots-Horizontal.png" />
                </div>
              </div>

              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px] relative">
                <div className="w-fit h-full bg-[#27292D] rounded-full flex items-center p-[1rem] absolute h-auto bottom-[2.5rem] left-[1.5rem]">
                  <div>
                    <img src="/images/hand.png" />
                  </div>
                </div>
                <div className="border border-[#35373B] text-sm placeholder:px-[rem] placeholder:text-lg placeholder:text-[#7F8084] placeholder:font-normal rounded block w-full pl-[4rem] pr-[1rem] bg-[#191920] py-[2rem] flex space-x-4">
                  <div className="text-[#7F8084] font-normal text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum amet vel tempore distinctio sed perferendis
                    aspernatur doloribus ad eius commodi est ipsa, eos nisi
                    autem a, enim labore, dignissimos optio!
                  </div>
                </div>
              </div>

              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px] pb-[20px]  flex space-x-4">
                <img src="images/Chat-Bubble.png" />

                <div className="text-[#7F8084] text-sm">24 comments</div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#27292D] h-full w-[700px] mb-5 border border-[#35373B] border-2 rounded-lg flex flex-col">
              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px] flex items-center justify-between">
                <div className="flex justify-between items-center ">
                  <div id="photo">
                    <img src="images/profile-next.png" />
                  </div>
                  <div className="flex flex-col justify-between  ml-4">
                    <div className="text-[#C5C7CA] font-medium text-base">
                      Marvin McKinney
                    </div>
                    <div className="text-[#7F8084] text-sm font-normal">
                      8mins ago • Edited
                    </div>
                  </div>
                </div>
                <div>
                  <img src="images/Dots-Horizontal.png" />
                </div>
              </div>

              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px] relative">
                <div className="w-fit h-full bg-[#27292D] rounded-full flex items-center p-[1rem] absolute h-auto bottom-[2.5rem] left-[1.5rem]">
                  <div>
                    <img src="/images/sad-emoji.png" />
                  </div>
                </div>
                <div className="border border-[#35373B] text-sm placeholder:px-[rem] placeholder:text-lg placeholder:text-[#7F8084] placeholder:font-normal rounded block w-full pl-[4rem] pr-[1rem] bg-[#191920] py-[2rem] flex space-x-4">
                  <div className="text-[#7F8084] font-normal text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum amet vel tempore distinctio sed perferendis
                    aspernatur doloribus ad eius commodi est ipsa, eos nisi
                    autem a, enim labore, dignissimos optio!
                  </div>
                </div>
              </div>

              <div className="text-lg font-medium text-[#C5C7CA] px-[20px] pt-[24px] pb-[20px]  flex space-x-4">
                <img src="images/Chat-Bubble.png" />

                <div className="text-[#7F8084] text-sm">4 comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <HomeRegisterModal closeModal={closeModal} />}
    </div>
  );
};

export default Home;
