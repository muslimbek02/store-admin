import { Link } from "react-router-dom";

import LogoImg from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="pl-[32px]">
      <Link to="/" className="inline-block">
        <img src={LogoImg} alt="logo-img" />
      </Link>
    </div>
  );
};

export default Logo;
