import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="flex flex-row font-inter">
      <SideBar />
      <div>
        <h1 className="m-[50px] text-[30px]">Home Page</h1>
        <Link to="/stores" className="ml-[50px] text-textActiveColor">
          Stores page o'tish
        </Link>
      </div>
    </div>
  );
};

export default Home;
