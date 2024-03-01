/* eslint-disable @next/next/no-img-element */

import { FaArrowAltCircleRight } from "react-icons/fa";
import { Rubik, inter } from "./layout";
import Companies from "@/components/Companies";
import Community from "@/components/Community";
import "./globals.css";
import Link from "next/link";
import SideBar from "@/components/SideBar";
export default function Home() {
  
  return (
    <>
    {/* <SideBar /> */}
    <main className="min-h-screen max-w-screen-xl flex flex-col gap-5 justify-center items-center">
      <h1 className={`${Rubik.className} text-4xl font-black text-center`}>
        Introducing
      </h1>
      <p className={`${inter.className} font-black sm:text-6xl text-3xl px-4 sm:px-1 text-center`}>
        Where <span className="text-indigo-600">developer</span> blogs
        <br />
        meet <span className="text-indigo-500">community</span> power!
      </p>
      <p className="text-center px-2">
        Create and grow your developer blog, newsletter, or team engineering
        blog effortlessly <br /> with Hashnode. Level up your writing using
        powerful AI features!
      </p>
      <div className="text-center flex justify-center  ">
        <Link href={"/blog/home"}> <button className="gap-4 py-3 w-[20rem] rounded-full text-white bg-indigo-600 hover:bg-indigo-800 flex justify-center ">
          <span className="btn-span ">Go To Your Timeline</span>{" "}
          <FaArrowAltCircleRight className="text-2xl arrow" />
        </button>
        </Link>
      </div>
    </main>
    <div className="">
      <p className="sm:text-[3rem] text-3xl px-4 sm:px-1 tracking-tighter font-bold leading-[3rem] text-center my-5">The go-to platform for top developers <br /> <span className="text-indigo-500"> from leading companies.</span></p>
    <Companies />
    </div>
    <div className="relative h-[800px]">
    <Community />
    </div>
    </>
  );
}
