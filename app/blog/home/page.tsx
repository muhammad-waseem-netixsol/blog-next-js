import BlogHome from "@/components/Home";
import Navbar from "@/components/Nav";
import {React} from "react";

const Home = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return <main>
     <BlogHome />
    </main>
};
export default Home;