import "../styles/main.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h2 className="logo">FocusAI</h2>

        <ul className="nav-links">
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQ</li>
        </ul>

        <button className="btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
