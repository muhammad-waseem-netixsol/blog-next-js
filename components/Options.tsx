"use client"
import useLogin from "@/zustand-store/loginStore/Login";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FcBiotech,
  FcHome,
  FcImport,
  FcRemoveImage,
  FcRules,
  FcTodoList,
} from "react-icons/fc";

const Options = () => {
    const path = usePathname();
    const {logout, role, isAuthenticated, token,} = useLogin();
    const [auth, setAuth] = useState(false);
    const logOutHandler = () => {
      logout();
    };
  
  useEffect(() => {
    const authentication = async () => {
      setAuth(await isAuthenticated());
    };
    authentication();
  }, [token, logout]);
  return (
    <ul className="inter-font flex flex-col justify-start items-start pl-3 md:sticky md:left-0 md:top-[80px]">
      {path !== "/blog/home" && <Link className="w-full" href={"/blog/home"}>
        <li className={`flex justify-start items-center px-2 gap-4 text-md w-full py-3 cursor-pointer hover:bg-indigo-100 ${path === "/home" && "bg-indigo-100"} rounded hover:underline`}>
          <FcHome className="text-2xl" /> Timeline
        </li>
      </Link>}
      {path !== "/blog/pending" && role === "writer" && <Link className="w-full" href={"/blog/pending"}>
        <li className={`flex justify-start items-center px-2 gap-4 text-md w-full py-3 cursor-pointer hover:bg-indigo-100 rounded hover:underline ${path === "/pending" && "bg-indigo-100"}`}>
          <FcBiotech className="text-2xl" /> Pending Posts
        </li>
      </Link>}
      {path !== "/you" && <Link className="w-full" href={"/you"}>
        <li className={`flex justify-start items-center px-2 gap-4 text-md w-full py-3 cursor-pointer hover:bg-indigo-100 rounded hover:underline ${path === "/you" && "bg-indigo-100"}`}>
          <FcRules className="text-2xl" /> Profile
        </li>
      </Link>}
      {path !== "/blog/posts" && <Link className="w-full" href={"/blog/posts"}>
        <li className={`flex justify-start items-center px-2 gap-4 text-md w-full py-3 cursor-pointer hover:bg-indigo-100 rounded hover:underline ${path === "/posts" && "bg-indigo-100"}`}>
          <FcTodoList className="text-2xl" /> My Posts
        </li>
      </Link>}
      {path !== "/blog/rejected" && <Link className="w-full" href={"/blog/rejected"}>
        <li className={`flex justify-start items-center px-2 gap-4 text-md w-full py-3 cursor-pointer hover:bg-indigo-100 rounded hover:underline ${path === "/rejected" && "bg-indigo-100"}`}>
          <FcRemoveImage className="text-2xl" /> Rejected
        </li>
      </Link>}
      
       {auth && <li onClick={logOutHandler} className="flex justify-start items-center px-2 gap-4 text-md w-full py-3 cursor-pointer  hover:bg-indigo-100 rounded hover:underline">
          <FcImport className="text-2xl" /> Log Out
        </li>}
      
    </ul>
  );
};
export default Options;
