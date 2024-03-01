"use client"
import useLogin from "@/zustand-store/loginStore/Login";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { GoHash } from "react-icons/go";
import { TbMessageCircle2 } from "react-icons/tb";

const Profile = () => {
  const {name, username, created, token} = useLogin();
  useLayoutEffect(()=> {
    if(!token){
      router.push("/auth/login");
    }
  }, [token])
  const router = useRouter();
  const joinDate = new Date(created).toLocaleDateString("en-US");
  return (
    <>
        <div className="h-48 bg-black w-full absolute left-0 top-0 z-[-1]"></div>
      <div className="inter-font max-w-screen-lg mx-auto p-3 mx:p-1">
        <div className="bg-white rounded-md flex flex-col items-center justify-center mt-32 pb-5">
            <div className="relative translate-y-[-50%] h-[120px] w-[120px] rounded-full p-2 bg-black">
                <img src="https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1273401%2Fc45e15ed-3b83-4c62-acf2-dd5efb809a41.png" className="block h-full w-full rounded-full" alt="pfp" />
            </div>
            <div className="md:text-3xl  font-black roboto-bold leading-3">{name}
            <p className="block text-center text-sm font-light text-gray-600">({username})</p></div>
            <p className="text-center py-5">Bio here</p>
            <div className="flex justify-center gap-2"><FaBirthdayCake className=" text-2xl"  />{joinDate}</div>
            <div className="py-5"> 
              <Link href={"/blog/home"}><button className="bg-indigo-600 text-white py-2 px-5 hover:bg-indigo-800">GO BACK TO TIMELINE</button></Link>
            </div>
        </div>
        <div className="bg-white my-4 p-4 max-w-[300px] rounded-md flex flex-col gap-5 mx-auto sm:mx-0">
            <div className="flex justify-start items-center gap-3"><GiNotebook className="text-2xl text-gray-600" />0 posts published</div>
            <div className="flex justify-start items-center gap-3"><TbMessageCircle2 className="text-2xl text-gray-600" />0 comments written</div>
            <div className="flex justify-start items-center gap-3"><GoHash className="text-2xl text-gray-600" />0 tags followed</div>
        </div>
      </div>
    </>
  );
};

export default Profile;