import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div
      className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 
    transition-all cursor-pointer"
    >
      <div className="grid gap-3 grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV3ip1gxZ9bM13uZjWbiCpiETs2AVz3GS_Q&usqp=CAU"
            alt="User-Logo"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>User Name</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            pariatur, excepturi exercitationem laudantium optio nam ex aut
            officia, quos delectus minima voluptatem possimus temporibus? Ut
            officia necessitatibus mollitia harum eveniet?
          </p>
          <div className="flex justify-between text-xl mt-5 p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
