import BlogHome from "@/components/Home";
import Navbar from "@/components/Nav";
type TestComponentProps = {
  children?: React.ReactNode;
}
const Home = (props: TestComponentProps) => {
  return (
    <main>
      <BlogHome />
    </main>
  );
};

export default Home;
