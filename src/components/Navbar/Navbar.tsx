import Logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex justify-between items-center container mx-auto p-4">
              <img src={Logo} alt="Logo" />

      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <button className="btn btn-ghost rounded-3xl">Sign In</button>
        <button className="btn btn-active btn-secondary rounded-3xl">
          Sign Up
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
