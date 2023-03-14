import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../css/Design.css";

const NavigationBar = () => {
  let nav_list_decor = {
    color: "var(--text)",
    textDecoration: "none",
    fontSize: "1.25rem",
  };

  return (
    <div className="navBarContainer">
      
      <Container>
        <ul className="nav_list_container">
          <li>
            <Link to="/Home" style={nav_list_decor}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/Skill" style={nav_list_decor}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="/Work" style={nav_list_decor}>
              Work Experiences
            </Link>
          </li>

          <li>
            <Link to="/Contact" style={nav_list_decor}>
              Contact Information
            </Link>
          </li>
          <div className="toggle_switch_theme">
            {/* <button className="btn btn-dark btn-round">change theme</button> */}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3rem"
                height="3rem"
                fill="currentColor"
                class="bi bi-toggle-on"
                viewBox="0 0 16 16"
              >
                <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
              </svg>
            </span>
          </div>
        </ul>
      </Container>
    </div>
  );
};

export default NavigationBar;
