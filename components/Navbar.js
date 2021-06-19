const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="logo">Mind Blogs</h1>
      </div>
      <ul className="nav-list">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <p className="btn">Login/signup</p>
        </li>
        <li>
          <p className="btn">Logout</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
