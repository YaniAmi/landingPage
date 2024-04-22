import Logoo from "../Assets/Logoo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container" style={{ paddingLeft: "6rem" }}>
        <img src={Logoo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
