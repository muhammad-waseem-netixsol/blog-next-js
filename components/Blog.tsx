"use client";
import React, { useState } from "react";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";
import Comments from "./Comments";
import Comment from "./Comment";
import { GrLike } from "react-icons/gr";
import BlogBottom from "./BlogBottom";
import Image from "next/image";
import logo from "@/public/assets/dev_logo.png";
import { BlogItem, CompProps } from "@/interfaces/interfaces";
import Link from "next/link";
import AdminControls from "./AdminControls";
import useLogin from "@/zustand-store/loginStore/Login";

const Blog: React.FC<CompProps> = ({ blog, details, isDetail, pending }) => {
  const [file, setFile] = useState<string>("");
  const [text, setText] = useState<string>("");
  const { role } = useLogin();
  return (
    <>
      {details ? (
        <Link href={`/blog/${blog?._id}`}>
          <div className="cursor-pointer max-w-full w-full flex flex-col rounded-md overflow-hidden bg-white mb-5">
            <div className="w-full h-60">
              <img
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:cursor-pointer object-center"
                src={blog?.image}
                alt="blog banner"
              />
            </div>
            <div className="px-5">
              {
                <div className="flex justify-start items-center my-3">
                  {/* picture */}
                  <div className="h-11 rounded-full w-11 overflow-hidden">
                    <img
                      src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F801847%2F7e13901c-7197-453d-bfb3-5258e2d92182.jpg"
                      alt="user"
                    />
                  </div>

                  {/* user details */}
                  <div className="flex mx-4 flex-col gap-0 justify-center items-start">
                    <p className="font-bold leading-4 cursor-pointer hover:underline">
                      {blog?.user?.name}
                    </p>
                    <span className="font-light text-sm leading-4">
                      {blog?.createdAt}
                    </span>
                  </div>
                </div>
              }
              {/* heading */}
              <h1 className="hover:text-indigo-400 cursor-pointer leading-9 w-full md:w-4/5 mx-auto text-3xl font-extrabold text-center">
                {blog?.heading}
              </h1>
              {/* tags */}
              <div className="text-center my-3">
                <span className="text-gray-700 italic text-base text-center">
                  #github #git
                </span>
              </div>

              <p className="post text my-5">
                {blog?.text} Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Molestias optio quaerat officiis sapiente sint p laceat
                voluptatibus accusamus eum voluptas sit nisi impedit ipsum
                facere, ullam velit, vero reprehenderit possimus animi. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
                inventore expedita dignissimos a non aliquam adipisci iusto
                nihil dolorem numquam exercitationem perspiciatis nulla
                quibusdam officiis optio blanditiis rerum, molestias asperiores.
              </p>

              {/* comments and reactions buttons */}
              {isDetail && (
                <BlogBottom
                  id={blog?._id}
                  show={false}
                  comments={blog?.comment}
                  reactions={blog?.reaction}
                />
              )}
              {pending && role === "admin" && <AdminControls id={blog?._id} />}
            </div>
          </div>
        </Link>
      ) : (
        <div className="cursor-pointer max-w-full w-full flex flex-col rounded-md overflow-hidden bg-white mb-5">
          <div className="w-full h-60">
            <img
              className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:cursor-pointer object-center"
              src={blog?.image}
              alt="blog banner"
            />
          </div>
          <div className="px-5">
            {
              <div className="flex justify-start items-center my-3">
                {/* picture */}
                <div className="h-11 rounded-full w-11 overflow-hidden">
                  <img
                    src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F801847%2F7e13901c-7197-453d-bfb3-5258e2d92182.jpg"
                    alt="user"
                  />
                </div>

                {/* user details */}
                <div className="flex mx-4 flex-col gap-0 justify-center items-start">
                  <p className="font-bold leading-4 cursor-pointer hover:underline">
                    {blog?.user?.name}
                  </p>
                  <span className="font-light text-sm leading-4">
                    {blog?.createdAt}
                  </span>
                </div>
              </div>
            }
            {/* heading */}
            <h1 className="hover:text-indigo-400 cursor-pointer leading-9 w-full md:w-4/5 mx-auto text-3xl font-extrabold text-center">
              {blog?.heading}
            </h1>
            {/* tags */}
            <div className="text-center my-3">
              <span className="text-gray-700 italic text-base text-center">
                #github #git
              </span>
            </div>

            <p className="post text my-5">
              {blog?.text} 
            </p>

            {/* comments and reactions buttons */}
            {isDetail && (
              <BlogBottom
                id={blog?._id}
                show={true}
                comments={blog?.comment}
                reactions={blog?.reaction}
              />
            )}
            {pending && role === "admin" && <AdminControls id={blog?._id} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
