import Footer from "../components/containers/footer";
import Intro from "../components/containers/intro";
import Navbar from "../components/containers/navbar";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="app-container">
        <Intro />
        <Navbar />
        <main className="mx-3 p-lg">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
