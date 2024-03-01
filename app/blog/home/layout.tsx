import Navbar from "@/components/Nav";

const HomeLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return <main className="container sm:mx-auto">
        {children}
    </main>
};
export default HomeLayout;