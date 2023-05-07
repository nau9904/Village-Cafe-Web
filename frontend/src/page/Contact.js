import React from "react";
import { BsFacebook, BsFillPhoneVibrateFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiKakaotalk } from "react-icons/si";
import toast from "react-hot-toast";

const Contact = () => {
  return (
    <div className="p-2 md:p-4 flex justify-center mt-20">
      <div
        className="m-10 flex gap-3 bg-slate-300 w-60 h-12 px-2 items-center rounded-full cursor-pointer hover:bg-green-400"
        onClick={() => {
          toast.success("Going to facebook");
        }}
      >
        <div>
          <BsFacebook className="h-10 w-10" />
        </div>
        <div>FaceBook</div>
      </div>
      <div
        className="m-10 flex gap-3 bg-slate-300 w-60 h-12 px-2 items-center rounded-full cursor-pointer hover:bg-green-400"
        onClick={() => {
          toast.success("Going to instagram");
        }}
      >
        <div>
          <AiFillInstagram className="h-10 w-10" />
        </div>
        <div>Instagram</div>
      </div>
      <div
        className="m-10 flex gap-3 bg-slate-300 w-60 h-12 px-2 items-center rounded-full cursor-pointer hover:bg-green-400"
        onClick={() => {
          toast.success("Going to kakaotalk");
        }}
      >
        <div>
          <SiKakaotalk className="h-8 w-8" />
        </div>
        <div>Kakaotalk</div>
      </div>
      <div
        className="m-10 flex gap-3 bg-slate-300 w-60 h-12 px-2 items-center rounded-full cursor-pointer hover:bg-green-400"
        onClick={() => {
          toast.success("Going to call by phone");
        }}
      >
        <div>
          <BsFillPhoneVibrateFill className="h-10 w-10" />
        </div>
        <div>Phone</div>
      </div>
    </div>
  );
};

export default Contact;
