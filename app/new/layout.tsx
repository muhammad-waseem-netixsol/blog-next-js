"use client"

import useLogin from "@/zustand-store/loginStore/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const {initialIsAuthenticated} = useLogin();
  useEffect(()=> {
    if(!initialIsAuthenticated){
      router.push("/auth/login")
    }
  },[])
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
