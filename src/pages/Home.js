import { Link } from "react-router-dom";
import "../css/Design.css";
import { Container } from "react-bootstrap";
const HomePage = () => {
  let style_border = {
    border: "solid var(--contrast) 4px",
    borderRadius: "40px",
  };

  let mytextStyled = {
    color: "var(--contrast)",
  };
  let highlighted_text = {
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="home_page">
        <div className="nav_vector_left">
          <div className="nav_vector1"></div>
          <div className="nav_vector2"></div>
        </div>
        <Container style={style_border}>
          <div className="home_page_wrapper">
            <div className="content_wrapper">
              <div className="col-6 name_content">
                <h1>
                  Hello! I'm <strong style={mytextStyled}>Joseph</strong>
                </h1>
                <h5>Full-stack Web Developer</h5>
              </div>
              <div className="col-6 text_content">
                <p>
                  <strong style={mytextStyled}>- -</strong> I was a Customer
                  Service Representative for 8 years and{" "}
                  <span style={highlighted_text}>
                    developed skills in multitasking, attention to detail, and
                    problem-solving.
                  </span>{" "}
                  I set time every day to learn to code and improve my knowledge
                  and coding skills.
                </p>
                <p>
                  I am always excited to learn new things and enthusiastic about
                  challenging and more complicated tasks or projects.{" "}
                  <strong>And Web Development is my dream job.</strong>
                </p>
              </div>
            </div>
            <div className="next_button">
              <Link to="/Skill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3rem"
                  height="3rem"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    style={mytextStyled}
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
