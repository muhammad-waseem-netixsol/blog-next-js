"use client"

import Blog from "@/components/Blog";
import blogStore from "@/zustand-store/blogStore/Blog";
import commentsStore from "@/zustand-store/commentStore/comment";
import useLogin from "@/zustand-store/loginStore/Login";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { FcCancel } from "react-icons/fc";

export default function Page({ params }: { params: { blogSlug: string } }) {
  const {getBlog, blog, fetching, fetchingError} = blogStore();
  const router = useRouter();
  const {initialIsAuthenticated} = useLogin();
  const {refetch} = commentsStore();
  useLayoutEffect(()=> {
      if(initialIsAuthenticated) {
        getBlog(params.blogSlug);
      }else{
        router.push("/auth/login");
      }
  }, [initialIsAuthenticated]);
  useEffect(()=> {
    getBlog(params.blogSlug);
  }, [refetch]);
  
  return <>
  {fetching && <h1 className="w-full text-center">Fetching blog...</h1>}
  {!fetching && fetchingError && <div className="flex flex-col items-center text-2xl"><FcCancel /><h1 className="text-center">Invalid id</h1></div>}
  {!fetching && !fetchingError && <Blog pending={false} isDetail={true} blog={blog} details={false}  />}
  </>
}