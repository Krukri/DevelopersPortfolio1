import { Link } from "react-router-dom";
import "../css/Design.css";
import { Container } from "react-bootstrap";
const SkillsPage = () => {
  let style_border = {
    border: "solid var(--contrast) 4px",
    borderRadius: "40px",
  };
  let mytextStyled = {
    color: "var(--contrast)",
  };

  let skill_styled = {
    color: "var(--contrast)",
  };
  return (
    <div>
      <div className="skills_page">
        <div className="skill_vector_left">
          <div className="skill_vector1"></div>
          <div className="skill_vector2"></div>
        </div>
        <Container style={style_border}>
          <div className="skill_page_wrapper">
            <div className="skills_content_wrapper">
              <div className="skills_row">
                <div className="col-6 skills_content">
                  <h1>
                    My <strong style={skill_styled}>Skills:</strong>
                  </h1>

                  <div className="the_stack_skill">
                    <h5>The Stacks that I am using:</h5>

                    <div className="stacks_list">
                      <ul>
                        <li>
                          <span className="stack_name_styled">HTML</span>
                        </li>
                        <li>
                          <span className="stack_name_styled">CSS</span>
                        </li>
                        <li>
                          <span className="stack_name_styled">
                            Bootstrap CSS
                          </span>
                        </li>
                        <li>
                          <span className="stack_name_styled">JavaScript</span>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          <span className="stack_name_styled">ReactJS</span>
                        </li>
                        <li>
                          <span className="stack_name_styled">
                            ReactBootstrap
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="skill_list">
                  <div className="skill_discussion">
                    <p>
                       <strong style={mytextStyled}>- -</strong> The skills that
                      I have acquired was all came from{" "}
                      <strong style={skill_styled}>Kodego PH Bootcamp</strong>.
                      I have learned all the basics in the Fundamentals of Web
                      Development.{" "}
                    </p>
                    <p>
                      I have scoured through the internet for the resources that
                      would help me more onto building simple and responsive
                      websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="next_button">
                <Link to="/Work">
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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SkillsPage;
